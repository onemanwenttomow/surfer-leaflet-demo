import dynamic from "next/dynamic";

// import Map from "@/components/Map";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <h1>Leaflet demo</h1>
      <Map />
    </div>
  );
}
