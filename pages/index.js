import dynamic from "next/dynamic";

// import Map from "@/components/Map";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const markers = [
  {
    id: "7c5qktU8",
    name: "Roßmarkt Frankfurt",
    lat: 50.1123904,
    long: 8.6753527,
  },
  {
    id: "2F11t82g",
    name: "Currywurst Wagen Hamburg",
    lat: 53.5450717,
    long: 10.0267705,
  },
  {
    id: "2F11fsdsfdg",
    name: "Schloss Lütetsburg",
    lat: 53.599779738815066,
    long: 7.263257092625226,
  },
];

export default function HomePage() {
  return (
    <div>
      <h1>Leaflet demo</h1>
      <Map markers={markers} />
    </div>
  );
}
