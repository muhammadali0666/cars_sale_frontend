import "./sidebar.css";
import Home from "../../assets/home.png";
import Elon from "../../assets/elon.png";
import Edit from "../../assets/edit.png";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar_list">
        <NavLink to="/home" className='navlink'>
          <li className="sidebar_item">
            <img
              src={Home}
              alt="icon"
              className="sidebar_img"
              width={20}
              height={20}
            />
            <p className="sidebar_p">Asosiy</p>
          </li>
        </NavLink>
        <NavLink className='navlink'>
          <li className="sidebar_item">
            <img
              src={Elon}
              alt="icon"
              className="sidebar_img"
              width={20}
              height={20}
            />
            <p className="sidebar_p">E’lonlar</p>
          </li>
        </NavLink>
        <NavLink className='navlink'>
          <li className="sidebar_item">
            <img
              src={Edit}
              alt="icon"
              className="sidebar_img"
              width={20}
              height={20}
            />
            <p className="sidebar_p">Savollar</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};
