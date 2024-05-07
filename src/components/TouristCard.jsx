import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
TouristCard.propTypes = {
  data: PropTypes.object,
};
export default function TouristCard({data}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const {
    _id,
    tourists_spot_name,
    image,
    country_name,
    average_cost,
    location,
    total_visitors_per_year,
  } = data;

  return (
    <>
      {loading ? (
        <div className="flex flex-col w-full gap-4">
          <div className="w-full h-64 skeleton"></div>
          <div className="w-24 h-3 ml-4 skeleton"></div>
          <div className="w-32 h-4 ml-4 skeleton"></div>
          <div className="w-32 h-4 ml-4 skeleton"></div>
          <div className="flex justify-between mx-4">
            <div className="w-32 h-4 skeleton"></div>
            <div className="w-32 h-4 skeleton"></div>
          </div>
          <div className="h-8 mx-auto skeleton w-28"></div>
        </div>
      ) : (
        <div className="border shadow-xl border-base-100 rounded-xs bg-base-300 card hover:border-green-500">
          <figure>
            <img src={image} alt={tourists_spot_name} />
          </figure>
          <div className="gap-0 p-5 card-body">
            <h3 className="mb-2 text-sm text-green-500">{country_name}</h3>
            <h2 className=" card-title">{tourists_spot_name}</h2>
            <p>{location}</p>
            <div className="flex flex-wrap justify-between">
              <h4>
                <span className="font-semibold">Avg. Cost: </span>$
                {average_cost}
              </h4>
              <h4>
                <span className="font-semibold">Visitors: </span>
                {total_visitors_per_year}/Year
              </h4>
            </div>
            <hr className="my-3" />
            <div className="justify-center card-actions">
              <Link
                to={`/touristspots/${_id}`}
                className="text-black bg-green-400 border-none hover:text-green-500 btn"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
