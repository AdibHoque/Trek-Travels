import {Outlet} from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
