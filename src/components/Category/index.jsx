import "./category.css";
import Car from "../../assets/nexia.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Category = () => {
  const [getGata, setMyData] = useState([]);
  const [datas, setDatas] = useState("");
  const [param, setParam] = useState('')

  useEffect(() => {
    fetch(`http://localhost:4001/get_categories`)
      .then((res) => res.json())
      .then((data) => setMyData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="category_h2">Modellari</h2>
      <div className="category" style={{ display: "flex" }}>
        {getGata.length &&
          getGata.map((e) => (
            <NavLink
              key={e.id}
              className="cars_category_card"
              to={`/get_cars/model/${e.id}`}
            >
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
