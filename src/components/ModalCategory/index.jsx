import "./modal.css";
import React, { Component } from "react";
import { useState } from "react";

export const ModalCategory = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-mdb-toggle="modal"
        data-mdb-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <span className="modal_span me-3"></span>
              <h5 class="modal-title" id="exampleModalLabel">
                Mashina qo’shish
              </h5>
              <button
                type="button"
                class="btn-close rounded-circle bg-dark-subtle p-3"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
