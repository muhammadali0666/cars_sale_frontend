// import "./carInfo.css";
import Malibu from "../../assets/malibu.png";
import Archa from "../../assets/archa.png";
import Bookmark from "../../assets/bookmark.png";
// import MalibuBig from "../../assets/malibu-main.png";
import Deggrel from "../../assets/360.png";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InnerImg from "../../assets/inside.png"

export const Inner = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  console.log(data);

  useEffect(() => {
    fetch(`http://localhost:4001/get_car_info/${id}`)
      .then((res) => res.json())
      .then((cardata) => setData(cardata))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="car_info">
      <h2 className="car_info_paragraph">Modellari</h2>
      <div className="car_info_box">
        {data.length &&
          data.map((e) => (
            <>
              <div className="car_info_left">
                <img
                  src={e.tashqi_rasm}
                  alt="img"
                  className="car_info_let_img"
                  width={300}
                  height={160}
                />
                <p className="car_info_left_paragraph">{e.discription}</p>
                <p className="car_info_left_p">{e.narx}</p>
                <p className="car_info_left_bottom_p">
                  Marka:{" "}
                  <span className="car_info_left_span">{e.discription}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Tanirovkasi:{" "}
                  <span className="car_info_left_span">{e.tanerovkasi}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Motor: <span className="car_info_left_span">{e.motor}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Year: <span className="car_info_left_span">{e.year}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Color: <span className="car_info_left_span">{e.color}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Distance:{" "}
                  <span className="car_info_left_span">{e.distance}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Gearbook:{" "}
                  <span className="car_info_left_span">{e.gearbook}</span>
                </p>
                <p className="car_info_left_bottom_p">
                  Deseription:{" "}
                  <span className="car_info_left_span">
                    {" "}
                    Mishina ideal holatda krasska top toza 100tali. Ayol
                    kishiniki judayam akuratno haydalgan.{" "}
                  </span>
                </p>
                <hr className="hr" />
                <p className="car_info_left_bottom_p car_info_left_bottom_p_extra">
                  Umumiy xarajat:{" "}
                  <span className="car_info_left_span car_info_left_bottom_p_extra">
                    {e.narx}
                  </span>
                </p>
              </div>
              <div className="car_info_right">
                <div className="car_info_right_top">
                  <h3 className="car_info_right">{e.discription}</h3>
                  <span className="car_info_right_span">
                    <img
                      src={Archa}
                      alt="icon"
                      className="car_info_right_img"
                      width={14}
                      height={14}
                    />
                    <img
                      src={Bookmark}
                      alt="icon"
                      className="car_info_right_img"
                      width={16}
                      height={18}
                    />
                  </span>
                </div>
                {/* <img
            src={MalibuBig}
            alt="car"
            className="car_info_right_big_img"
            width={824}
            height={444}
          /> */}
               <img src={InnerImg} alt="" />
                <div className="car_info_right_bottom_before">
                  <img
                    src={Deggrel}
                    alt="car"
                    className="car_info_right_big_360"
                    width={32}
                    height={32}
                  />
                  <p className="car_info_right_text">
                    Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
                    Mashinaning rangi ushbu saytda taqdim etilganidan farq
                    qilishi mumkin.
                  </p>
                  <div className="car_info_right_bottom">
                    <NavLink to={`/cartype/${e.id}`} className="car_info_right_bottom">
                      <input
                        type="radio"
                        className="car_info_right_bottom_input"
                      />
                      <p className="car_info_right_bottom_p">Tashqi</p>
                    </NavLink>
                    <NavLink to={`/inner/${e.id}`} className="car_info_right_bottom">
                      <input
                        type="radio"
                        className="car_info_right_bottom_input"
                      />
                      <p className="car_info_right_bottom_p">Ichki</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};