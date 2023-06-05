import { Category } from "../../components/Category";
import { Header } from "../../components/Header";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="navbar_cars" style={{display: "flex", marginTop: "40px"}}>
        <NavLink className="navbar_p" to="/home">
          Bosh sahifa
        </NavLink>
        <p className="navbar_symbol">{">"}</p>
        <NavLink className="navbar_p">
          modellari
        </NavLink>
      </div>
      <Category />
    </div>
  );
};
