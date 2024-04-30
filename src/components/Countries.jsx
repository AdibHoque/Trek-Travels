import {useEffect, useState} from "react";
import TouristCard from "./TouristCard";
import {Link} from "react-router-dom";
import CountryCard from "./CountryCard";

export default function Countries() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/countries.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  if (data.length == 0) {
    return (
      <div className="flex justify-center w-full">
        <span className="text-green-500 loading loading-spinner size-40"></span>
      </div>
    );
  }
  return (
    <>
      <div className="px-4 lg:px-24">
        <h1 className="my-8 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          Countries
        </h1>
        <div className="grid grid-cols-1 gap-4 my-6 md:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 6).map((d) => (
            <CountryCard
              key={`${Math.random() * 999999}id`}
              data={d}
            ></CountryCard>
          ))}
        </div>
      </div>
    </>
  );
}
