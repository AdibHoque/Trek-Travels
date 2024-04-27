import {useEffect, useState} from "react";
import TouristCard from "./TouristCard";
import {Link} from "react-router-dom";

export default function TouristSpots() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/touristspots/")
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
          {data.slice(0, 6).map((d) => (
            <TouristCard
              key={`${Math.random() * 999999}id`}
              data={d}
            ></TouristCard>
          ))}
        </div>
        <div className="flex justify-center my-4">
          <Link
            to={`/alltouristspots`}
            className="text-black bg-green-400 border-none hover:text-green-500 btn"
          >
            Show More
          </Link>
        </div>
      </div>
    </>
  );
}
