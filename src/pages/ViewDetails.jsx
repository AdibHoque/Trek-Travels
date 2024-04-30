import {Link, useLoaderData} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";

export default function ViewDetails() {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = useLoaderData();
  const {
    _id,
    tourists_spot_name,
    image,
    short_description,
    country_name,
    average_cost,
    location,
    total_visitors_per_year,
    seasonality,
    travel_time,
  } = data;

  return (
    <>
      <div
        id={_id}
        className="flex items-center justify-center px-4 lg:px-24 lg:h-[88vh] my-2"
      >
        <div className="p-6 shadow-xl card lg:card-side bg-base-300">
          <figure>
            <img src={image} alt={tourists_spot_name} />
          </figure>
          <div className="p-6">
            <h3 className="text-sm text-green-500">{country_name}</h3>
            <p className="mb-2">{location}</p>
            <div className="my-4">
              <h2 className="card-title">{tourists_spot_name}</h2>
              <p>{short_description}</p>
            </div>

            <div className="flex flex-col my-6 gap-y-2">
              <h4>
                <span className="font-semibold">Average Cost: </span>$
                {average_cost}
              </h4>
              <h4>
                <span className="font-semibold">Yearly Visitors: </span>
                {total_visitors_per_year}
              </h4>
              <h4>
                <span className="font-semibold">Best Season to Visit: </span>
                {seasonality}
              </h4>
              <h4>
                <span className="font-semibold">Travel Time: </span>
                {travel_time}
              </h4>
            </div>
            <div className="justify-center card-actions">
              <Link
                to={`/`}
                className="text-black bg-green-400 border-none hover:text-green-500 btn"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
