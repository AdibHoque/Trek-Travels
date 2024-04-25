import {GiMountaintop} from "react-icons/gi";

export default function Banner() {
  return (
    <>
      <div className="flex mx-auto h-[86vh] items-center lg:px-24">
        <swiper-container
          style={{
            "--swiper-navigation-color": "#22c55e",
            "--swiper-pagination-color": "#22c55e",
          }}
          pagination-clickable="true"
          navigation="true"
          effect="cube"
          autoplay="true"
          grab-cursor="true"
          cube-effect-shadow="true"
          cube-effect-slide-shadows="true"
          cube-effect-shadow-offset="20"
          cube-effect-shadow-scale="0.94"
          className="max-w-xs mySwiper"
        >
          <swiper-slide>
            <div className="flex flex-col items-center justify-center h-full bg-[url('https://i.ibb.co/VV06R87/Bisnakandi-Sylhet.jpg')]">
              <h1 className="mb-0  flex flex-col gap-1 text-7xl items-center justify-center font-bold leading-none text-green-500 animate__animated animate__fadeInRight animate-fade-right animate-once">
                <GiMountaintop className="text-7xl" /> TrekTravels
              </h1>
              <h1 className="text-2xl bg-black bg-opacity-25 font-normal text-white font-lato px-4 lg:px-64 text-center">
                Discover the World&apos;s Hidden Wonders with TrekTravels:
                Unforgettable Expeditions Await Every Adventurer.
              </h1>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex items-center justify-center h-full bg-[url('https://i.ibb.co/BBwj2XT/Boga-Lake.jpg')]">
              <h1 className="text-2xl h-full w-full flex justify-center items-center bg-black bg-opacity-25 text-center font-bold text-white md:text-5xl font-lato">
                Roam through Enchanted Landscapes,<br></br>Embrace the Magic of
                Exploration.
              </h1>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div className="flex items-center justify-center h-full bg-[url('https://i.ibb.co/NsTZsT4/Jaflong.jpg')]">
              <h1 className="text-2xl h-full w-full flex justify-center items-center bg-black bg-opacity-25 text-center font-bold text-white md:text-5xl font-lato">
                Wander into Untold Horizons,<br></br>Dive into the Bliss of
                Discovery.
              </h1>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}
