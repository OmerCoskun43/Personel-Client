import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StickyNavbar } from "../components/Navbar";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Personnels from "../pages/Personnels";
import Departments from "../pages/Departments";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/personnels" element={<Personnels />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
