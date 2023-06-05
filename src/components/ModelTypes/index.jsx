import "./modeltypes.css";
import Cars from "../../assets/ferarri.png";
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";

export const ModelTypes = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    fetch(`http://localhost:4001/get_cars/model/${id}`)
      .then((res) => res.json())
      .then((cardata) => setData(cardata))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="modeltypes">
      <h2 className="modeltypes paragraph">Modellar turlari</h2>
      <div className="modal_inner">
        {data.length &&
          data.map((e) => (
            <NavLink key={e.id} className="mobeltypes_box" to={`/cartype/${e.id}`}>
              <img
                src={e.tashqi_rasm}
                alt="car"
                className="modeltypes_img"
                width={289}
                height={220}
              />
              <h4 className="modeltypes_paragraph">{e.discription}</h4>
              <p className="modeltypes_p">Narxi: {e.narx}</p>
            </NavLink>
          ))}
      </div>
    </div>
  );
};
