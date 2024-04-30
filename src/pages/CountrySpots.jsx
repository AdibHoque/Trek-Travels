import {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import TouristCard from "../components/TouristCard";

export default function CountrySpots() {
  const data = useLoaderData();
  const {id} = useParams();
  if (data.length == 0) {
    return (
      <div className="flex justify-center w-full">
        <span className="text-green-500 loading loading-spinner size-40"></span>
      </div>
    );
  }
  return (
    <>
      <div className="px-4 mb-12 lg:px-24">
        <h1 className="my-8 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          Tourist Spots of {id}
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
