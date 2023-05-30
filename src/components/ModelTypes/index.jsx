import "./modeltypes.css";
import Cars from "../../assets/ferarri.png";

export const ModelTypes = () => {
  return (
    <div className="modeltypes">
      <h2 className="modeltypes paragraph">Modellar turlari</h2>
      <div className="mobeltypes_box">
        <img
          src={Cars}
          alt="car"
          className="modeltypes_img"
          width={289}
          height={220}
        />
        <h4 className="modeltypes_paragraph">Modellar turlari</h4>
        <p className="modeltypes_p">Narxi: 329 900 000</p>
      </div>
    </div>
  );
};
