import { Route, Routes, useParams } from "react-router-dom";
import { Register } from "../components/Registeration";
import { Login } from "../components/Login";
import { Home } from "../pages/Home";
import { Models } from "../pages/Models";
import { CarInfo } from "../pages/CarInfo";
import { InnerMain } from "../pages/Inner";
import { NotFound } from "../components/NotFound";
import { AdminLogin } from "../components/AdminLogin";
import { Admin } from "../pages/Admin";
import { Profile } from "../components/Profile";
import { Like } from "../components/Like";
// import {Test} from "../pages/Test"

export const RoutWrapper = () => {

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/get_cars/model/:id" element={<Models />} />
      <Route path="/cartype/:id" element={<CarInfo />} />
      <Route path="/inner/:id" element={<InnerMain />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/like" element={<Like/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
