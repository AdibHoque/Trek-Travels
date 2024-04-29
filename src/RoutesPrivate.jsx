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
    return (
      <div className="flex justify-center w-full">
        <span className="text-green-500 loading loading-spinner size-40"></span>
      </div>
    );
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
