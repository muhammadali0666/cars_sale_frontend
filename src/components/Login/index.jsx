import "./login.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

    fetch("http://localhost:4001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert(data.msg);
        }
        if (data.token) {
          window.location.href = "/home";
        }
      });
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login_inner">
          <div className="login_box">
            <h2 className="login_paragraph">Login</h2>
            <form className="login_form" onSubmit={handleSubmit}>
              <div className="login_mini_box">
                <input
                  type="email"
                  placeholder="login"
                  className="login_input"
                  style={{ marginBottom: "30px", paddingLeft: "40px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login_mini_box">
                <input
                  type="password"
                  placeholder="parol"
                  className="login_input"
                  style={{ paddingLeft: "40px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <NavLink to="/" href="#" className="login_check">
                Register
              </NavLink>
              <button type="submit" className="login_btn">
                Kirish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};