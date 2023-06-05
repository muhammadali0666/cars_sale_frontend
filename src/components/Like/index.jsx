import profile from "../../assets/profile.png"
import Likes from "../../assets/like.png"
import { NavLink } from "react-router-dom";
import Logout from "../../assets/sign-out.png"

export const Like = () => {
  return (
    <div className="profile">
      <div className="container">
        <div className="profile_inner">
          <div className="pro_sidebar">
            <NavLink className='pro_admin_link' to='/profile'>
            <img src={profile} alt="img" className="profile_img" width={70} height={70}/>
            </NavLink>
            <NavLink href="#" className="pro_admin_link">
              <img src={Likes} alt="icon" className="pro_admin_link_img" width={25} height={25}/>
              <p className="pro_admin_link_p">
                favourite
              </p>
            </NavLink>
            <NavLink href="#" className="pro_admin_link pro_admin_link_logout" to="/home">
            <img src={Logout} alt="icon" className="profile_exit" style={{marginRight: "20px"}} width={30} height={30}/>
            <p className="pro_admin_link_p">chiqish</p>
          </NavLink>
          </div>
          <div className="pro_admin">
            <h2 className="profile_paragraph">
              Like
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
};