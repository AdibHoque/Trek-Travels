import Banner from "../components/Banner";
import Countries from "../components/Countries";
import Faq from "../components/Faq";
import OurPartners from "../components/OurPartners";
import TouristSpots from "../components/TouristSpots";
import {Fade} from "react-awesome-reveal";

export default function Home() {
  return (
    <>
      <Fade>
        <Banner></Banner>
        <TouristSpots></TouristSpots>
        <Countries></Countries>
        <Faq></Faq>
        <OurPartners></OurPartners>
      </Fade>
    </>
  );
}
