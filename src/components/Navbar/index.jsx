import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar_car">
      <NavLink className="navbar_p" to='/home'>Bosh sahifa</NavLink>
      <p className="navbar_symbol">{">"}</p>
      <NavLink className="navbar_p">modellari</NavLink>
      <p className="navbar_symbol">{">"}</p>
      <NavLink className="navbar_p">chevrolet turlari</NavLink>
    </div>
  );
};
