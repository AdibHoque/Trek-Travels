import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";
import TouristCard from "../components/TouristCard";

export default function AllTouristSpots() {
  const [sortData, setSortData] = useState([]);

  function handleSort(event) {
    const type = event.target.value;
    if (type == "Average Cost - Descending") {
      fetch(`https://assignment-10-api-peach.vercel.app/touristspots/sort/desc`)
        .then((data) => data.json())
        .then((data) => setSortData(data));
    }
    if (type == "Average Cost - Ascending") {
      fetch(`https://assignment-10-api-peach.vercel.app/touristspots/sort/asc`)
        .then((data) => data.json())
        .then((data) => setSortData(data));
    }
  }

  const loaderData = useLoaderData();
  let data = [];
  if (sortData.length == 0) {
    data = loaderData;
  } else {
    data = sortData;
  }

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
          All Tourist Spots
        </h1>
        <select
          onChange={handleSort}
          className="select select-bordered w-full mb-2 max-w-[12rem] font-semibold text-center bg-green-500 text-base-300 animate-fade animate-delay-200 animate-once"
        >
          <option defaultValue>Sort By</option>
          <option>Average Cost - Descending</option>
          <option>Average Cost - Ascending</option>
        </select>
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
