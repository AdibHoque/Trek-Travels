import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
CountryCard.propTypes = {
  data: PropTypes.object,
};
export default function CountryCard({data}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  const {image, country_name, short_description} = data;

  return (
    <>
      {loading ? (
        <div className="flex flex-col w-full gap-4">
          <div className="w-full h-64 skeleton"></div>
          <div className="w-24 h-3 ml-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
          <div className="w-full h-2 mx-4 skeleton"></div>
        </div>
      ) : (
        <Link to={`/countries/${country_name}`}>
          <div className="border shadow-xl border-base-100 rounded-xs bg-base-300 card hover:border-green-500">
            <figure>
              <img src={image} alt={country_name} className="w-full h-64" />
            </figure>
            <div className="gap-0 p-5 card-body">
              <h2 className="text-green-500 card-title">{country_name}</h2>
              <hr className="my-3" />
              <p>{short_description}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
