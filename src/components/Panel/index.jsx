import "./panel.css";
import Right from "../../assets/arrow-right.png";
import { useEffect, useState } from "react";

export const Panel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [carData, setCarData] = useState([]);
  const [selectedImgTashqi, setSelectedImgTashqi] = useState(null);
  const [option, setOption] = useState("");
  const [tanerovka, setTanerovka] = useState("");
  const [motor, setMotor] = useState("");
  const [color, setColor] = useState("");
  const [year, setYear] = useState("");
  const [distance, setDistance] = useState("");
  const [gearbook, setGearbook] = useState("");
  const [narx, setNarx] = useState("");
  // const [ichkiRasm, setIchkiRasm] = useState(null);
  // const [miniImg, setMiniImg] = useState(null);
  const [discription, setDiscription] = useState("");

  ///////////////////////////////// handleFileInputChange
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "chatImages");

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4001/create_category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category_img: data.url,
            category_title: title,
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        window.location.reload(true);
      });
  };

  ///////////////////////////////////////// handleFileTashqi

  const handleFileTashqi = (event) => {
    setSelectedImgTashqi(event.target.files[0]);
  };
  // const handleFileIchki = (event) => {
  //   setIchkiRasm(event.target.files[0]);
  // };
  // const handleFileMiniimg = (event) => {
  //   setMiniImg(event.target.files[0]);
  // };

  const handleUploadCar = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedImgTashqi);
    formData.append("upload_preset", "chatImages");

    fetch("https://api.cloudinary.com/v1_1/dev4pmh5c/image/upload", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:4001/create_car", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tashqi_rasm: data.url,
            category_id_markasi: option,
            tanerovkasi: tanerovka,
            motor: motor,
            year: year,
            color: color,
            distance: distance,
            gearbook: gearbook,
            narx: narx,
            discription: discription,
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg))
          .catch((error) => console.log(error));
        window.location.reload(true);
      });
  };

  /////////////////////////////////////// get

  useEffect(() => {
    fetch("http://localhost:4001/get_categories")
      .then((res) => res.json())
      .then((data) => setCarData(data));
  }, []);

  return (
    <div className="panel">
      <div className="panel_box">
        <div className="panel_top">
          <span className="panel_span"></span>
          <h2 className="panel_paragraph">Mashinalar</h2>
          <div className="panel_top_box">
            <button
              className="panel_btn"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
            >
              <span className="panel_btn_span">+</span>
              Kategoriya qo’shish
            </button>
            <button
              className="panel_btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <span className="panel_btn_span">+</span>
              Mashina qo‘shish
            </button>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Markasi</th>
              <th scope="col">Gearbook</th>
              <th scope="col">Tonirovkasi</th>
              <th scope="col">Motor</th>
              <th scope="col">Year</th>
              <th scope="col">Color</th>
              <th scope="col">Distance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>CHEVROLET</td>
              <td>Avtomat karonka</td>
              <td>Yoq</td>
              <td>1.6</td>
              <td>2016</td>
              <td>Oq</td>
              <td>300km</td>
              <td>
                <img
                  src={Right}
                  alt="img"
                  className="right"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>CHEVROLET</td>
              <td>Avtomat karonka</td>
              <td>Yoq</td>
              <td>1.6</td>
              <td>2016</td>
              <td>Oq</td>
              <td>300km</td>
              <td>
                <img
                  src={Right}
                  alt="img"
                  className="right"
                  width={24}
                  height={24}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* hh */}
      <>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleUploadImage}>
              <div className="modal-header">
                <span className="modal_span me-3"></span>
                <h5 className="modal-title" id="exampleModalLabel">
                  Mashina qo’shish
                </h5>
                <button
                  type="button"
                  className="btn-close rounded-circle bg-dark-subtle p-3"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Markasi
                    <input
                      type="text"
                      className="modal_category_input"
                      placeholder="Kriting"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Rasm 360 ichki makon
                    <input
                      type="file"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Yuklash"
                      accept=".txt, .jfif, .jpeg, .png"
                      onChange={(e) => handleFileInputChange(e)}
                    />
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
      {/* ff  */}
      <>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <form className="modal-content" onSubmit={handleUploadCar}>
              <div className="modal-header">
                <span className="modal_span me-3"></span>
                <h5 className="modal-title" id="exampleModalLabel">
                  Mashina qo’shish
                </h5>
                <button
                  type="button"
                  className="btn-close rounded-circle bg-dark-subtle p-3"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="modal_category_input_box">
                  <select
                    className="modal_category_select"
                    onChange={(e) => setOption(e.target.value)}
                    defaultValue=""
                  >
                    {carData.length &&
                      carData.map((element, index) => (
                        <option
                          className="modal_category_option"
                          value={element.category_title}
                          key={index}
                        >
                          {element.category_title}
                        </option>
                      ))}
                  </select>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Tanirovkasi
                    <input
                      type="text"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Yoq"
                      required
                      value={tanerovka}
                      onChange={(e) => setTanerovka(e.target.value)}
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Motor
                    <input
                      type="text"
                      className="modal_category_input"
                      placeholder="Kriting"
                      required
                      value={motor}
                      onChange={(e) => setMotor(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Year
                    <input
                      type="text"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Kriting"
                      required
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Color
                    <input
                      type="text"
                      className="modal_category_input"
                      placeholder="Kriting"
                      required
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Distance
                    <input
                      type="text"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Kriting"
                      required
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Gearbook
                    <input
                      type="text"
                      className="modal_category_input"
                      placeholder="Kriting"
                      required
                      value={gearbook}
                      onChange={(e) => setGearbook(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Narx
                    <input
                      type="text"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Kriting"
                      required
                      value={narx}
                      onChange={(e) => setNarx(e.target.value)}
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Rasm 360 tashqi makon
                    <input
                      type="file"
                      className="modal_category_input"
                      placeholder="Yuklash"
                      required
                      onChange={(e) => handleFileTashqi(e)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Rasm 360 ichki makon
                    <input
                      type="file"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Yuklash"
                      // onChange={(e) => handleFileIchki(e)}
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Discription
                    <textarea
                      type="text"
                      className="modal_category_input"
                      placeholder="Mazmuni kiriting"
                      rows="5"
                      value={discription}
                      onChange={(e) => setDiscription(e.target.value)}
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    mini view
                    <input
                      type="file"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Kriting"
                      // onChange={(e) => handleFileMiniimg(e)}
                    />
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Saqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};
