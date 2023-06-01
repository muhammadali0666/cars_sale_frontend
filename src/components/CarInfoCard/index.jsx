import "./carInfo.css";
import Malibu from "../../assets/malibu.png";
import Archa from "../../assets/archa.png";
import Bookmark from "../../assets/bookmark.png";
import MalibuBig from "../../assets/malibu-main.png";
import Deggrel from "../../assets/360.png"
import { NavLink } from "react-router-dom";

export const CarInfoCard = () => {
  return (
    <div className="car_info">
      <h2 className="car_info_paragraph">Modellari</h2>
      <div className="car_info_box">
        <div className="car_info_left">
          <p className="car_info_left_paragraph">Chevrolet Malibu</p>
          <p className="car_info_left_p">329 900 000 so‘m dan</p>
          <img
            src={Malibu}
            alt="img"
            className="car_info_let_img"
            width={348}
            height={160}
          />
          <p className="car_info_left_bottom_p">
            Marka: <span className="car_info_left_span">CHEVROLET</span>
          </p>
          <p className="car_info_left_bottom_p">
            Tanirovkasi: <span className="car_info_left_span">Yo‘q</span>
          </p>
          <p className="car_info_left_bottom_p">
            Motor: <span className="car_info_left_span">1.6</span>
          </p>
          <p className="car_info_left_bottom_p">
            Year: <span className="car_info_left_span">2016</span>
          </p>
          <p className="car_info_left_bottom_p">
            Color: <span className="car_info_left_span">Oq</span>
          </p>
          <p className="car_info_left_bottom_p">
            Distance: <span className="car_info_left_span">300km</span>
          </p>
          <p className="car_info_left_bottom_p">
            Gearbook:{" "}
            <span className="car_info_left_span">Avtomat karobka</span>
          </p>
          <p className="car_info_left_bottom_p">
            Marka: <span className="car_info_left_span">CHEVROLET</span>
          </p>
          <p className="car_info_left_bottom_p">
            Deseription:{" "}
            <span className="car_info_left_span">
              {" "}
              Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki
              judayam akuratno haydalgan.{" "}
            </span>
          </p>
          <hr className="hr" />
          <p className="car_info_left_bottom_p car_info_left_bottom_p_extra">
            Umumiy xarajat:{" "}
            <span className="car_info_left_span car_info_left_bottom_p_extra">
              329 900 000 so'm dan{" "}
            </span>
          </p>
        </div>
        <div className="car_info_right">
          <div className="car_info_right_top">
            <h3 className="car_info_right">Chevrolet Malibu</h3>
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
          <iframe
          width={824} height={444} src="https://momento360.com/e/u/298352849df3474591a52d9cd5fe9055?utm_campaign=embed&utm_source=other&size=medium&display-plan=true" frameborder="0"></iframe>
         <div className="car_info_right_bottom_before">
         <img
            src={Deggrel}
            alt="car"
            className="car_info_right_big_360"
            width={32}
            height={32}
          />
          <p className="car_info_right_text">
            Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
            rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
          </p>
          <div className="car_info_right_bottom">
            <NavLink to='/cartype' className="car_info_right_bottom">
              <input type="radio" className="car_info_right_bottom_input" />
              <p className="car_info_right_bottom_p">Tashqi</p>
            </NavLink>
            <NavLink to='/inner' className="car_info_right_bottom">
              <input type="radio" className="car_info_right_bottom_input" />
              <p className="car_info_right_bottom_p">Ichki</p>
            </NavLink>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};
