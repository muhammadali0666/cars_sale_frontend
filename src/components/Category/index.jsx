import "./category.css";
import Car from "../../assets/nexia.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Category = () => {
  const [getGata, setMyData] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4001/get_categories`)
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.log(err));
  }, []);



  const getId = (element) => {
    sessionStorage.setItem("id", element)
  }

  return (
    <div>
      <h2 className="category_h2">Modellari</h2>
      <div className="category" style={{ display: "flex" }}>
        {getGata.length &&
          getGata.map((e) => (
            <NavLink className="cars_category_card" to="/model" onClick={getId(e.id)}>
              <div className="category_box">
                <img
                  src={e.category_img}
                  alt="car"
                  className="category_img"
                  width={289}
                  height={160}
                />
                <h4 className="ctegory_paragraph">{e.category_title}</h4>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
};
