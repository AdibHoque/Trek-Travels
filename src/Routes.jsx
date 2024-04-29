import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewDetails from "./pages/ViewDetails";
import AllTouristSpots from "./pages/AllTouristSpots";
import AddTouristSpot from "./pages/AddTouristSpot";
import MyList from "./pages/MyList";
import RoutesPrivate from "./RoutesPrivate";
import UpdateTouristSpot from "./pages/UpdateTouristSpot";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/alltouristspots",
        element: (
          <RoutesPrivate>
            <AllTouristSpots></AllTouristSpots>
          </RoutesPrivate>
        ),
        loader: () => fetch(`http://localhost:5000/touristspots`),
      },
      {
        path: "/touristspots/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/touristspots/${params.id}`),
      },
      {
        path: "/addtouristspot",
        element: (
          <RoutesPrivate>
            <AddTouristSpot></AddTouristSpot>
          </RoutesPrivate>
        ),
      },
      {
        path: "/mylist",
        element: (
          <RoutesPrivate>
            <MyList></MyList>
          </RoutesPrivate>
        ),
      },
      {
        path: "/updatetouristspot/:id",
        element: (
          <RoutesPrivate>
            <UpdateTouristSpot></UpdateTouristSpot>
          </RoutesPrivate>
        ),
        loader: ({params}) =>
          fetch(`http://localhost:5000/touristspots/${params.id}`),
      },
    ],
  },
]);

export default routes;
