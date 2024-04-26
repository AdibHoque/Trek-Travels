import {useEffect, useState} from "react";
import TouristCard from "./TouristCard";

export default function TouristSpots() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/touristSpot.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="px-4 lg:px-24">
        <h1 className="my-8 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          Tourist Spots
        </h1>
        <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((d) => (
            <TouristCard
              key={`${Math.random() * 999999}id`}
              data={d}
            ></TouristCard>
          ))}
        </div>
      </div>
    </>
  );
}
