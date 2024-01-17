import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
	const token = localStorage.getItem("token");

	if (!token) return <Navigate to="/login" />;

	return children || <Outlet />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;