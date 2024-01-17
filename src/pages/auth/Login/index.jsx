import { Link } from "react-router-dom";
import FloatingLogo from "../../../components/UI/FloatingLogo";
import SideLogo from "../../../components/Auth/SideLogo";
import LoginForm from "../../../components/Auth/LoginForm";
import "../../../styles/auth.css";

const Login = () => {
  return (
    <section id="login">
      <div className="container-fluid">
        <div className="row">
          <div className="side col-sm-5 col-md-6 d-none d-sm-flex">
            <div className="icon text-center w-100">
              <SideLogo />
            </div>
          </div>
          <div className="auth login col-sm-7 col-md-6">
            <div className="content ff-inter">
              <div className="d-sm-none text-center mb-4">
                <FloatingLogo />
              </div>
              <h1 className="fs-4 fw-bold color-primary text-center mb-3">
                Welcome
              </h1>
              <h2 className="fs-6 text-secondary text-center mb-4">
                Log in into your existing account
              </h2>
              <LoginForm />
              <div className="d-flex justify-content-end ff-airbnb">
                <Link className="link-secondary text-decoration-none" href="#">
                  Forgot Password?
                </Link>
              </div>
              <p className="text-center text-secondary mt-4 ff-airbnb">
                Dont have an account?{" "}
                <Link
                  className="color-primary text-decoration-none"
                  to="/register"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
