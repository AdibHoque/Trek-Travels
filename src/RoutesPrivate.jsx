import {useContext} from "react";
import {AuthContext} from "./AuthProvider";
import {Navigate} from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PropTypes from "prop-types";

const MySwal = withReactContent(Swal);

RoutesPrivate.propTypes = {
  children: PropTypes.node,
};

export default function RoutesPrivate({children}) {
  const {user, loading} = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) return children;
  MySwal.fire({
    position: "center",
    icon: "error",
    title: "Kindly Login first to enter this page.",
    showConfirmButton: false,
    timer: 2000,
  });
  return <Navigate to="/login"></Navigate>;
}
