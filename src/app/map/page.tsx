"use client";
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import { locations } from './locations';
import Node from "../components/node"
import MarkerShadow from "../../../public/images/marker-shadow.png"

// Leaflet imports
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
// import * as L from 'leaflet';
// import 'leaflet-defaulticon-compatibility';
import { Map as LeafletMap } from 'leaflet';
import { MapContainerProps, useMapEvents, useMap } from "react-leaflet";

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

const LeafletCSS = () => {
  useEffect(() => {
    require("leaflet/dist/leaflet.css");
  }, []);
  return null;
};

const LeafletCompatibility = () => {
  useEffect(() => {
    require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css");
    require("leaflet-defaulticon-compatibility");
  }, []);

  return null;
};

interface Location {
  id: string;
  name: string;
  date: string;
  location: string;
  lumaLink: string;
  joinLink: string;
  instagramLink: string;
  twitterLink: string;
  youtubeLink: string;
  websiteLink: string;
  imageSrc?: string;
  coordinates: [number, number];
};

function MapEvents({
  setSelectedLocation,
}: {
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location | null>>;
}) {
  useMapEvents({
    click: () => {
      setTimeout(() => setSelectedLocation(null), 300);
    },
  });
  return null;
}

// function MapController({ setMap }: { setMap: (map: LeafletMap) => void }) {
//   const map = useMap();
  
//   useEffect(() => {
//     setMap(map);
//   }, [map, setMap]);

//   return null;
// }

export default function MapPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  // const [map, setMap] = useState<LeafletMap | null>(null);
  const map = useMap();
  const markersRef = useRef<{ [key: string]: L.Marker | null }>({});
  const centerPoint: [number, number] = [51.557152, -62.146388];
  

  // useEffect(() => {
  //   // Error handling
  //   const handleError = (error: any) => {
  //     console.error('An error occurred:', error);
  //     setError('An error occurred while loading the map. Please try refreshing the page.');
  //   };

  //   window.addEventListener('error', handleError);
  //   return () => window.removeEventListener('error', handleError);
  // }, []);

  const setMapRef = useCallback((node: LeafletMap | null) => {
    if (node !== null) {
      mapRef.current = node;
    }
  }, []);

  useEffect(() => {
    console.log("Map: ", map);
    const locationId = searchParams.get('location');
    if (locationId) {
      const location = locations.find(loc => loc.id === locationId);
      if (location) {
        setSelectedLocation(location);
        if (true) {
          // const map = mapRef.current;
          // map.setView(location.coordinates, 2);
          
          // Open the popup for the selected location
          // const marker = markersRef.current[locationId];
          // if (marker) {
          //   setTimeout(() => {
          //     marker.openPopup();
          //   }, 100); // Small delay to ensure the map has finished moving
          // }
        }
      }
    }
  }, [searchParams]);

  const [L, setL] = useState<any>(null);

  useEffect(() => {
    import("leaflet").then((L) => {
      setL(L);
    });
  }, []);

  const defaultIcon = L
    ? L.icon({
        iconUrl:
          "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
        shadowUrl: MarkerShadow.src,
        iconSize: [25, 41],
        shadowSize: [41, 41],
        iconAnchor: [12, 41],
        shadowAnchor: [13, 41],
        popupAnchor: [1, -34],
      })
    : null;

    const handleMarkerClick = useCallback(
      (location: Location) => {
        setSelectedLocation({
          ...location,
          coordinates: location.coordinates as [number, number],
        });
  
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("location", location.id);
        router.push(`?${newSearchParams.toString()}`, { scroll: false });
      },
      [router, searchParams],
    );

  return (
    <>
      <LeafletCSS />
      <LeafletCompatibility />
      <div id="map" className="w-screen h-screen">
        <MapContainer
          center={centerPoint}
          zoom={3}
          minZoom={3}
          maxZoom={18}
          maxBounds={[[-90, -180], [90, 180]]}
          maxBoundsViscosity={1.0}
          style={{ height: '100%', width: '100%' }}
          // ref={mapRef}
        >
          {/* <MapController setMap={setMap} /> */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MapEvents setSelectedLocation={setSelectedLocation} />

          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={defaultIcon}
              // ref={(ref) => {
              //   console.log("ref: ", ref);
              //   if (ref) {
              //     markersRef.current[location.id] = ref;
              //   }
              // }}
              eventHandlers={{
                click: () => handleMarkerClick(location),
              }}
              // eventHandlers={{
              //   click: () => {
              //     router.push(`/map?location=${location.id}`, undefined, { shallow: true });
              //     setSelectedLocation(location);
              //   },
              // }}
            >
              <Popup minWidth={285} maxWidth={400}>
                <Node
                  id={location.id}
                  name={location.name}
                  date={location.date}
                  location={location.location.toUpperCase()}
                  lumaLink={location.lumaLink}
                  imageSrc={location.imageSrc}
                  joinLink={location.joinLink}
                  websiteLink={location.websiteLink}
                  instagramLink={location.instagramLink}
                  twitterLink={location.twitterLink}
                  youtubeLink={location.youtubeLink}
                />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}