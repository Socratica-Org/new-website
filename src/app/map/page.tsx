"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { locations } from "./locations";
import Node from "../components/node";
import Popup from "../components/popup";
import TopBar from "../components/topbar";
import { Location } from "../types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

export default function MapPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-62.146388);
  const [lat, setLat] = useState(51.557152);
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    const locationId = searchParams.get("location");
    if (locationId) {
      const location = locations.find((loc) => loc.id === locationId);
      if (location) {
        setSelectedLocation(location);
        map.current?.flyTo({
          center: [location.coordinates[1], location.coordinates[0]],
          zoom: 5,
        });
      }
    }
  }, [searchParams]);

  // useEffect(() => {
  //   if (selectedLocation) {
  //     const popupNode = document.getElementById(`popup-${selectedLocation.id}`);
  //     if (popupNode) {
  //       ReactDOM.render(
  //         <Node
  //           id={selectedLocation.id}
  //           name={selectedLocation.name}
  //           date={selectedLocation.date}
  //           location={selectedLocation.location.toUpperCase()}
  //           lumaLink={selectedLocation.lumaLink}
  //           imageSrc={selectedLocation.imageSrc}
  //           joinLink={selectedLocation.joinLink}
  //           websiteLink={selectedLocation.websiteLink}
  //           instagramLink={selectedLocation.instagramLink}
  //           twitterLink={selectedLocation.twitterLink}
  //           youtubeLink={selectedLocation.youtubeLink}
  //         />,
  //         popupNode
  //       );
  //     }
  //   }
  // }, [selectedLocation]);

  useEffect(() => {
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom,
        minZoom: 2,
        maxZoom: 18,
        maxBounds: [
          [-180, -90],
          [180, 90],
        ],
      });
    }

    map.current?.on("load", () => {
      // Add markers
      locations.forEach((location) => {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundImage =
          "url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png)";
        el.style.width = "25px";
        el.style.height = "41px";
        el.style.backgroundSize = "100%";

        const marker = new mapboxgl.Marker(el)
          .setLngLat([location.coordinates[1], location.coordinates[0]])
          .addTo(map.current!);

        // const popupContent = ReactDOMServer.renderToString(
        //   <Node
        //     id={location.id}
        //     name={location.name}
        //     date={location.date}
        //     location={location.location.toUpperCase()}
        //     lumaLink={location.lumaLink}
        //     imageSrc={location.imageSrc}
        //     joinLink={location.joinLink}
        //     websiteLink={location.websiteLink}
        //     instagramLink={location.instagramLink}
        //     twitterLink={location.twitterLink}
        //     youtubeLink={location.youtubeLink}
        //   />
        // );

        // const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent);

        // marker.setPopup(popup);

        marker.getElement().addEventListener("click", () => {
          setSelectedLocation(location);
          const newSearchParams = new URLSearchParams(searchParams.toString());
          newSearchParams.set("location", location.id);
          router.push(`?${newSearchParams.toString()}`, { scroll: false });
        });
      });
    });

    map.current?.on("move", () => {
      setLng(parseFloat(map.current!.getCenter().lng.toFixed(4)));
      setLat(parseFloat(map.current!.getCenter().lat.toFixed(4)));
      setZoom(parseFloat(map.current!.getZoom().toFixed(2)));
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, []);

  const closePopup = () => {
    setSelectedLocation(null);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("location");
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  // return (
  //   // <div>
  //   //   <div ref={mapContainer} className="map-container" style={{ width: '100vw', height: '100vh' }} />
  //   // </div>
  //   <>
  //     <TopBar isDarkMode={false} isHeaderVisible={false} />
  //     <div
  //       ref={mapContainer}
  //       className="map-container"
  //       style={{ width: "100vw", height: "100vh", position: "relative" }}
  //     >
  //       {/* {selectedLocation && (
  //         <div className="absolute">
  //           <Popup location={selectedLocation} onClose={closePopup} />
  //         </div>
  //       )} */}

  //       {selectedLocation && (
  //         <Popup location={selectedLocation} onClose={closePopup} />
  //       )}
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="absolute top-0 left-0 right-0 z-10">
        <TopBar isDarkMode={false} isHeaderVisible={false} />
      </div>

      <div
        ref={mapContainer}
        className="map-container"
        style={{ width: "100vw", height: "100vh", position: "relative" }}
      >
        {selectedLocation && (
          <Popup location={selectedLocation} onClose={closePopup} />
        )}
      </div>
    </>
  );
}
