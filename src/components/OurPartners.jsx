import Marquee from "react-fast-marquee";

export default function OurPartners() {
  return (
    <>
      <div className="px-4 lg:px-24">
        <h1 className="mt-8 mb-2 text-5xl font-bold text-center text-green-500 animate__animated animate__bounce font-merriweather banner-font">
          Our Partners
        </h1>
        <Marquee className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Sky_Airline_2017.png/640px-Sky_Airline_2017.png"
            alt=""
            className="mx-10"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/640px-Airbnb_Logo_B%C3%A9lo.svg.png"
            alt="AirBNB"
            className="mx-10"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Trivago_logo_2023.svg/640px-Trivago_logo_2023.svg.png"
            alt=""
            className="mx-10"
          />
        </Marquee>
      </div>
    </>
  );
}
