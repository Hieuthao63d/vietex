"use client";

import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { name: "Malaysia", coordinates: [101.9758, 4.2105] as [number, number] },
  { name: "South Korea", coordinates: [127.7669, 35.9078] as [number, number] },
  { name: "Indonesia", coordinates: [113.9213, -0.7893] as [number, number] },
  { name: "Japan", coordinates: [138.2529, 36.2048] as [number, number] },
  { name: "Russia", coordinates: [105.3188, 61.5240] as [number, number] },
  { name: "Thailand", coordinates: [100.9925, 15.8700] as [number, number] },
];

const WorldMap = () => {
  return (
    <div className="w-full h-full relative" style={{ minHeight: "200px" }}>
      <ComposableMap
        projectionConfig={{
          scale: 120,
          center: [90, 20] // Focus more on Asia/Russia region
        }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#E5E7EB" // gray-200
                stroke="#FFFFFF"
                strokeWidth={0.5}
                className="outline-none hover:fill-[#D1D5DB]"
              />
            ))
          }
        </Geographies>

        {/* Export Destinations */}
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <g transform="translate(-6, -6)">
              {/* Outer pulsing circle */}
              <circle
                r="6"
                cx="6"
                cy="6"
                fill="#10B981"
                className="animate-ping origin-center"
                style={{ animationDuration: '2s' }}
              />
              {/* Inner dot */}
              <circle
                r="4"
                cx="6"
                cy="6"
                fill="#10B981"
                stroke="#FFFFFF"
                strokeWidth={1.5}
              />
            </g>
          </Marker>
        ))}

        {/* Exporter (Vietnam) */}
        <Marker coordinates={[108.2022, 14.0583]}>
          <g transform="translate(-8, -8)">
            <circle
              r="8"
              cx="8"
              cy="8"
              fill="#EAB308" // yellow-500 for origin
              className="animate-ping origin-center"
              style={{ animationDuration: '1.5s' }}
            />
            <circle
              r="5"
              cx="8"
              cy="8"
              fill="#EAB308"
              stroke="#FFFFFF"
              strokeWidth={2}
            />
          </g>
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default memo(WorldMap);
