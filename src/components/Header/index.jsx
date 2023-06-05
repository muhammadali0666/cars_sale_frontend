import React from "react";
import Icon from "../../assets/user_icon.png";
import "./header.css";
import { NavLink } from "react-router-dom";
import pro from "../../assets/profile.png";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/adminlogin" className="header_navlink">
        <button className="header_btn">
          <img
            src={Icon}
            alt="icon"
            className="header_icon"
            width={19}
            height={20}
          />
          Admin o‘tish
        </button>
      </NavLink>
      <NavLink className="navlink_header" to='/profile'>
        <div className="profile">
          <img
            src={pro}
            alt="img"
            className="profile_img"
            width={70}
            height={70}
          />
          <p className="profile_p">Profile</p>
        </div>
      </NavLink>
    </div>
  );
};
