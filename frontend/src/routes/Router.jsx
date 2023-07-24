import { Home } from "../pages/Home";
import { Services } from "../pages/Services";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { Doctors } from "../pages/Doctors/Doctors";
import { DoctorDetails } from "../pages/Doctors/DoctorDetails";
import { Contact } from "../pages/Contact";
import { Routes, Route } from "react-router-dom";
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/auth/signin" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};
