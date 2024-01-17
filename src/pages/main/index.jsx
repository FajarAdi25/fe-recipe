import { Outlet } from "react-router-dom";
import NavbarLogin from "../../components/UI/Navbar";
import Footer from "../../components/UI/Footer"
const Main = () => {
  return (
    <div>
      <NavbarLogin />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
