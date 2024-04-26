import {GiMountaintop} from "react-icons/gi";

export default function Banner() {
  return (
    <>
      <div className="flex h-[88vh] items-center mx-auto lg:px-24">
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
            <div className="h-full bg-[url('https://i.ibb.co/VV06R87/Bisnakandi-Sylhet.jpg')]">
              <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30">
                <h1 className="flex flex-col items-center justify-center gap-1 mb-0 text-5xl font-bold leading-none text-white md:text-7xl animate__animated animate__fadeInRight animate-fade-right animate-once">
                  <GiMountaintop className="text-9xl" /> TrekTravels
                </h1>
                <h1 className="px-8 text-xl font-normal text-center text-white md:text-2xl font-lato lg:px-64">
                  Discover the World&apos;s Hidden Wonders with TrekTravels:
                  Unforgettable Expeditions Await Every Adventurer.
                </h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex items-center justify-center h-full bg-[url('https://i.ibb.co/NsTZsT4/Jaflong.jpg')]">
              <div className="flex flex-col items-center justify-center w-full h-full gap-4 bg-black bg-opacity-30">
                <h1 className="flex items-center justify-center px-5 text-xl font-bold text-center text-white md:text-5xl font-lato">
                  Wander into Untold Horizons,<br></br>Dive into the Bliss of
                  Discovery.
                </h1>
                <h1 className="px-8 text-sm font-normal text-center text-white md:text-2xl font-lato lg:px-64">
                  Embrace the call of adventure as you wander into Untold
                  Horizons, where every step unveils a new chapter of discovery.
                  Dive into the bliss of exploration with TrekTravels, where
                  each journey is a tapestry of unforgettable moments waiting to
                  be woven into your story of wanderlust.
                </h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="flex items-center justify-center h-full bg-[url('https://i.ibb.co/BBwj2XT/Boga-Lake.jpg')]">
              <div className="flex flex-col items-center justify-center w-full h-full gap-4 bg-black bg-opacity-30">
                <h1 className="flex items-center justify-center px-5 text-xl font-bold text-center text-white md:text-5xl font-lato">
                  Roam through Enchanted Landscapes,<br></br>Embrace the Magic
                  of Exploration.
                </h1>
                <h1 className="px-8 text-sm font-normal text-center text-white md:text-2xl font-lato lg:px-64">
                  Embrace the call of adventure as you wander into Untold
                  Horizons, where every step unveils a new chapter of discovery.
                  Dive into the bliss of exploration with TrekTravels, where
                  each journey is a tapestry of unforgettable moments waiting to
                  be woven into your story of wanderlust.
                </h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
}
