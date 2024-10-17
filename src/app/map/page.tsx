"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isMobile } from "react-device-detect";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { locations } from "./locations";
import Node from "../components/node";
import Popup from "../components/popup";
import TopBar from "../components/topbar";
import MobileNavbar from "../components/mobile-navbar";
import { Location } from "../types";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

export default function MapPage() {
  return (
    <Suspense fallback="Loading map...">
      <MapPageContent />
    </Suspense>
  );
}

const MapPageContent = () => {
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
      // map.current?.setPaintProperty("land", "background-color", "#c6cca5"); // Beige land
      // map.current?.setPaintProperty("water", "fill-color", "#93d1e6"); // Beige water
      // map.current?.setPaintProperty('road', 'line-color', 'rgba(222, 184, 135, 1)'); // Beige roads

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

  return (
    <>
      {!isMobile && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <TopBar isDarkMode={false} isHeaderVisible={false} />
        </div>
      )}

      {isMobile && (
        <div className="absolute top-4 right-4 z-10">
          <MobileNavbar />
        </div>
      )}

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
};
