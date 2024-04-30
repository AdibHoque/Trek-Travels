import {useEffect, useState} from "react";
import PropTypes from "prop-types";

Accordions.propTypes = {
  data: PropTypes.object,
};

function Accordions({data}) {
  const {question, answer} = data;
  return (
    <div className="mb-2 collapse collapse-plus bg-base-200 animate-fade-up animate-once">
      <input type="radio" name="my-accordion-3" />
      <div className="text-xl font-bold collapse-title">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/faq.json")
      .then((data) => data.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="px-4 lg:px-24">
        <h1 className="py-4 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          Frequently Asked Questions
        </h1>
        <div className="w-full join join-vertical">
          <div className="mb-2 collapse collapse-plus bg-base-200 animate-fade-up animate-once">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="text-xl font-bold collapse-title">
              What is TrekTravels?
            </div>
            <div className="collapse-content">
              <p>
                TrekTravels is a premier online platform offering a wide range
                of adventure and cultural tours in South Asia. We specialize in
                organizing guided trekking expeditions, cultural tours, wildlife
                safaris, and more across countries like Nepal, Bhutan, India,
                Sri Lanka, and Bangladesh. Our mission is to provide
                unforgettable travel experiences while promoting sustainable
                tourism practices and supporting local communities.
              </p>
            </div>
          </div>
          {data.map((d) => (
            <Accordions
              key={Math.round(Math.random() * 99999)}
              data={d}
            ></Accordions>
          ))}
        </div>
      </div>
    </>
  );
}
