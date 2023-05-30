import "./panel.css";
import Right from "../../assets/arrow-right.png";

export const Panel = () => {
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
            <div className="modal-content">
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
                    />
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Saqlash
                </button>
              </div>
            </div>
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
            <div className="modal-content">
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
                  <label htmlFor="input" className="modal_category_label">
                    Markasi
                    <input
                      type="text"
                      className="modal_category_input"
                      placeholder="Kriting"
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Tanirovkasi
                    <input
                      type="text"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Yoq"
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
                    />
                  </label>
                </div>
                <div className="modal_category_input_box">
                  <label htmlFor="input" className="modal_category_label">
                    Rasm 360 ichki makon
                    <input
                      type="file"
                      className="modal_category_input"
                      placeholder="Yuklash"
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
                    />
                  </label>
                  <label
                    htmlFor="input"
                    className="modal_category_label modal_category_label_extra"
                  >
                    Year
                    <input
                      type="file"
                      className="modal_category_input modal_category_input_extra"
                      placeholder="Kriting"
                    />
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Saqlash
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
