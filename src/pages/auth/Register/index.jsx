import { Link } from "react-router-dom";
import FloatingLogo from "../../../components/UI/FloatingLogo";
import SideLogo from "../../../components/Auth/SideLogo";
import RegisterForm from "../../../components/Auth/RegisterForm";

const Register = () => {
  return (
    <section id="register">
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
                Lets Get Started
              </h1>
              <h2 className="fs-6 text-secondary text-center mb-4">
                Create new account to access all features
              </h2>
              <RegisterForm
              // {...navigate("/login")}
              />
              <p className="text-center text-secondary mt-4 ff-airbnb">
                Already have account?{" "}
                <Link
                  className="color-primary text-decoration-none"
                  to="/login"
                >
                  Log in Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
