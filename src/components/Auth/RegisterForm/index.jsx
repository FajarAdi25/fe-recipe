import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/userAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { useFormInput } from "../../../hooks/useInput";

const RegisterForm = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  // 	e.preventDefault();
  // 	await dispatch(register(form));
  //   return alert("register berhasil")
  // };

  const handleSubmit = () => {
    try {
      dispatch(register(form));
      // {navigate}
      navigate("/login");
      return alert("register berhasil");
      // console.log('data user =', user);
    } catch (error) {
      alert(error.data.message);
    }
  };

  // const username = useFormInput("");
  // const email = useFormInput("");
  // const phone = useFormInput("");
  // const password = useFormInput("");
  // const confirmPassword = useFormInput("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(
  //     username.value,
  //     email.value,
  //     phone.value,
  //     password.value,
  //     confirmPassword.value
  //     );
  // };

  return (
    <form>
      <Input
        componentClassName="mb-2"
        labelClassName={""}
        className="form-control form-control-sm p-3 mb-2"
        label="Username"
        type="text"
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <Input
        componentClassName="mb-2"
        className="form-control form-control-sm p-3 mb-2"
        label="E-mail"
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        componentClassName="mb-2"
        className="form-control form-control-sm p-3 mb-2"
        label="Phone Number"
        type="number"
        placeholder="08xxxxxxxxx"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <Input
        componentClassName="mb-2"
        className="form-control form-control-sm p-3 mb-2"
        label="Create New Password"
        type="password"
        placeholder="Create New Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Input
        componentClassName="mb-2"
        className="form-control form-control-sm p-3 mb-2"
        label="New Password"
        type="password"
        placeholder="New Password"
        value={form.confirmPassword}
        onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
      />
      <Checkbox
        className="form-check-input"
        type="checkbox"
        label="I agree to terms and conditions"
      />
      <Button
        type="submit"
        className="back-primary w-100 text-light mb-2"
        onClick={handleSubmit}
      >
        {loading ? "loading..." : "Register Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
