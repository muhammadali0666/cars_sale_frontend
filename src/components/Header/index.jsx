import React from 'react'
import Icon from '../../assets/user_icon.png'
import "./header.css"
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
     <NavLink to='/admin' className='header_navlink'>
     <button className="header_btn">
        <img src={Icon} alt="icon" className="header_icon" width={19} height={20}/>
        Admin o‘tish
      </button>
     </NavLink>
    </div>
  )
}
