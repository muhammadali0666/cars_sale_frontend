import "./admin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const Navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };

   await fetch("http://localhost:4001/adminLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        if(data.msg === "Welcome to admin panel ✋") {
          alert(data.msg)
          Navigate("/admin")
        }
      })
      .catch((err) => {
        console.log(err.message);
     });
  };

  return (
    <div className="container">
      <form className="admin_login_form" onSubmit={handleSubmit}>
        <h1 className="admin_login_paragraph">Admin login</h1>
        <label htmlFor="admin_input" className="admin_login_label">
          email
          <input
            type="email"
            id="admin_input"
            className="admin_login_input"
            required
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="admin_password" className="admin_login_label">
          password
          <input
            type="password"
            id="admin_password"
            className="admin_login_input"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="admin_login_btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
