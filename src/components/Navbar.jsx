import {Link, NavLink, useMatch} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../AuthProvider";
import {
  FaUserCircle,
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
  FaPlus,
  FaList,
} from "react-icons/fa";
import {FaMountainSun} from "react-icons/fa6";
import {GiMountaintop} from "react-icons/gi";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function NavBar() {
  const storedTheme = JSON.parse(localStorage.getItem("theme"));
  const [darkTheme, setDarkTheme] = useState(
    storedTheme !== null ? storedTheme : false
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkTheme));
    document
      .querySelector("html")
      .setAttribute("data-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  const {user, logOut, loading} = useContext(AuthContext);
  const [navToggle, setNavToggle] = useState(false);
  const match = useMatch("/login");
  const navClass = ({isActive, isPending}) =>
    isPending || isActive
      ? "btn btn-outline text-green-500 border-2 border-green-500 rounded-xs font-extrabold hover:border-white hover:text-white"
      : "btn btn-outline border-2 border-muted text-muted font-bold rounded-xs hover:border-green-500 hover:text-green-500";
  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/alltouristspots" className={navClass}>
          <FaMountainSun /> All Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to="/addtouristspot" className={navClass}>
          <FaPlus /> Add Tourists Spot
        </NavLink>
      </li>
      <li>
        <NavLink to="/mylist" className={navClass}>
          <FaList /> My List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="h-full px-2 md:8 navbar bg-base-300 lg:px-24">
      <div className="navbar-start">
        <details className="dropdown ">
          <summary
            tabIndex={0}
            role="button"
            onClick={() => setNavToggle(!navToggle)}
            className={`z-50 p-2 mr-2 border-2 btn btn-square btn-outline ${
              navToggle ? "border-green-500" : "border-muted"
            } lg:hidden`}
          >
            {navToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 text-2xl text-green-500 stroke-current swap-on"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 text-2xl stroke-current text-muted swap-off"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 animate-flip-down font-bold gap-2 border-2 border-base-300"
          >
            {links}
          </ul>
        </details>
        <Link className="flex items-center justify-center gap-1 mb-0 text-2xl font-bold leading-none text-green-500 animate__animated animate__fadeInRight md:text-3xl lg:leading-none lg:text-3xl animate-fade-right animate-once font-playfair">
          <GiMountaintop className="text-4xl" /> TrekTravels
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex animate__animated animate__fadeInDown">
        <ul className="gap-2 px-2 text-white menu menu-horizontal">{links}</ul>
      </div>
      <div className="flex navbar-end animate__animated animate__fadeInLeft">
        <Tooltip id="theme-tooltip" className="z-50" />
        <label className="mx-2 swap swap-rotate hover:text-green-500">
          {/* this hidden checkbox controls the state */}
          <input onClick={() => setDarkTheme(!darkTheme)} type="checkbox" />

          {/* sun icon */}
          <svg
            data-tooltip-id="theme-tooltip"
            data-tooltip-content="Dark Theme"
            className="w-10 h-10 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            data-tooltip-id="theme-tooltip"
            data-tooltip-content="Light Theme"
            className="w-10 h-10 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {loading ? (
          <span className="text-green-500 loading loading-spinner loading-lg"></span>
        ) : user ? (
          <div className="flex justify-center md:gap-2">
            <details className="dropdown dropdown-end">
              <summary className="text-4xl text-white btn btn-circle btn-ghost">
                {user.photoURL ? (
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                ) : (
                  <FaUserCircle />
                )}
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 animate-flip-down animate-once font-bold">
                <li>
                  <button
                    onClick={logOut}
                    className="btn btn-outline bg-transparent font-roboto border-muted border-2 text-muted rounded-xs hover:border-green-500 hover:text-green-500 hover:bg-[#202020]"
                  >
                    <FaSignOutAlt className="text-2xl" />
                    <span className="">LOGOUT</span>
                  </button>
                </li>
              </ul>
            </details>
          </div>
        ) : match ? (
          <Link
            to="/register"
            className="flex flex-col items-center p-1 mx-0 bg-transparent md:btn md:btn-outline font-roboto md:border-muted md:border-2 text-muted rounded-xs hover:border-green-500 hover:text-green-500"
          >
            <FaUserPlus className="text-3xl md:text-xl" />
            <span className="text-xs"> Register</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="flex flex-col items-center p-1 mx-0 bg-transparent md:btn md:btn-outline font-roboto md:border-muted md:border-2 text-muted rounded-xs hover:border-green-500 hover:text-green-500"
          >
            <FaSignInAlt className="text-3xl md:text-xl" />
            <span className="text-xs"> LOGIN</span>
          </Link>
        )}
      </div>
    </div>
  );
}
