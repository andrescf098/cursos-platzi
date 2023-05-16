import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavElement = ({ to, children }) => {
  const activeStyle = "underline underline-offset-4";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeStyle : undefined)}
    >
      {children}
    </NavLink>
  );
};
NavElement.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string,
};
export default NavElement;
