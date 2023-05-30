import "./category.css";
import Car from "../../assets/nexia.png";
import { NavLink } from 'react-router-dom';

export const Category = () => {
  return (
    <div className="category">
      <h2 className="category_h2">
      Modellari
      </h2>
      <NavLink to='/model' style={{textDecoration: "none"}}>
      <div className="category_box">
        <img
          src={Car}
          alt="car"
          className="category_img"
          width={289}
          height={220}
        />
        <h4 className="ctegory_paragraph">CHEVROLET</h4>
      </div>
      </NavLink>
    </div>
  );
};
