import {Outlet} from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <>
      <NavBar></NavBar>
      <div className="bg-base-100">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}
