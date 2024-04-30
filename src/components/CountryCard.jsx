import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
CountryCard.propTypes = {
  data: PropTypes.object,
};
export default function CountryCard({data}) {
  useEffect(() => {
    AOS.init();
  }, []);
  const {image, country_name, short_description} = data;

  return (
    <>
      <Link to={`/countries/${country_name}`}>
        <div
          data-aos="fade-up"
          className="border shadow-xl border-base-100 rounded-xs bg-base-300 card hover:border-green-500"
        >
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
    </>
  );
}
