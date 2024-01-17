import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import Checkbox from "../../UI/Checkbox";
import Input from "../../UI/Input";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/actions/userAction";
import { useState } from "react";

const LoginForm = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      dispatch(login(form));
      navigate("/home");
      return alert("login berhasil");
    } catch (error) {
      alert(error.data.message);
    }
  };
  return (
    <form>
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
        label="Password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
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
        {loading ? "loading..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
