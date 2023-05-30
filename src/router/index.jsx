import { Route, Routes } from "react-router-dom";
import Register from "../components/Registeration";
import Login from "../components/Login";
import { Home } from "../pages/Home";
import { Models } from "../pages/Models";
import { CarInfo } from "../pages/CarInfo";
import { InnerMain } from "../pages/Inner";
import { NotFound } from "../components/NotFound";
import { Admin } from "../pages/Admin";
// import {Test} from "../pages/Test"

export const RoutWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/model" element={<Models />} />
      <Route path="/cartype" element={<CarInfo />} />
      <Route path="/inner" element={<InnerMain />} />
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/test" element={<Test/>}/> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
