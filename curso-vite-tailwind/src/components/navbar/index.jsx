import { NavLink } from "react-router-dom";
import NavElement from "./NavItem";
import { ShoppingCartContext } from "../../context";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="bg-white flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavElement to="/all">All</NavElement>
        </li>
        <li>
          <NavElement to="/clothes">Clothes</NavElement>
        </li>
        <li>
          <NavElement to="/electronics">Electronics</NavElement>
        </li>
        <li>
          <NavElement to="/fornitures">Fornitures</NavElement>
        </li>
        <li>
          <NavElement to="/toys">Toys</NavElement>
        </li>
        <li>
          <NavElement to="/others">Others</NavElement>
        </li>
      </ul>
      <ul className="flex gap-3 ">
        <li className="text-black/60">test@correo.mail</li>
        <li>
          <NavElement to="/my-orders">My Orders</NavElement>
        </li>
        <li>
          <NavElement to="/my-account">My Account</NavElement>
        </li>
        <li>
          <NavElement to="/sign-in">Sign In</NavElement>
        </li>
        <li>{context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
