import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import Main from "./pages/main";
import Profile from "./pages/main/Profile";
// import Card from "./components/UI/Card";
// import RegisterForm from "./components/Auth/RegisterForm";
import AddRecipe from "./pages/main/Products/AddRecipe";
// import DetailProduct from "./components/Products/DetailProduct";
import DetailRecipe from "./pages/main/Products/DetailRecipe";
import DetailVideoRecipe from "./pages/main/Products/DetailVideo";
import PrivateRoute from "./components/PrivateRoute";
// import Main from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={ />}/> */}
        {/* public */}
        <Route>
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="detailRecipe/:id" element={<DetailRecipe />} />
            <Route path="detailVideo/:id" element={<DetailVideoRecipe />} />
          </Route>
        </Route>
        {/* private */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="profile" element={<Profile />} />
            <Route path="add" element={<AddRecipe />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
