import "./admin.css"
import Icon from "../../assets/user_icon.png"
import Notificate from "../../assets/notificate.png"
import Avatar from "../../assets/Avatar.png"
import { NavLink } from "react-router-dom"

export const  AdminHeader = () => {
  return (
    <div className="admin_header"> 
       <button className="admin_header_btn">
       <NavLink to='/home' className='admin_header_btn'>
       <img src={Icon} alt="icon" className="admin_header_icon" width={19} height={20}/>
        Asosiyga qaytish
       </NavLink>
      </button>

      <span className="admin_header_span">
        <img src={Notificate} alt="icon" className="admin_header_img" width={20} height={20}/>
        <img src={Avatar} alt="icon" className="admin_header_img" width={48} height={48}/>
      </span>
    </div>
  )
}
