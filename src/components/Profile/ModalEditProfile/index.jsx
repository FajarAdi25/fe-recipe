import { useEffect, useState } from "react";

import { Modal } from "react-bootstrap";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Images from "../../UI/Images";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../redux/actions/userAction";

const ModalEditProfile = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [saveImage, setSaveImage] = useState("");
  const { loading, user } = useSelector((state) => state.user);
  let [data, setData] = useState({
    username: "",
    phone: "",
    image: saveImage,
  });

  useEffect(() => {
    setData({
      username: user.username,
      phone: user.phone,
      image: user,
    });
  }, [user, saveImage]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  };

  const handleSubmit = async () => {
    try {
      dispatch(editUser({ data, saveImage }));
      handleClose();
    } catch (error) {
      alert(error.data.message);
    }
  };
  return (
    <div className="container">
      {/* <!-- Button trigger modal --> */}
      <div className="dropdown">
        <button className="border-0 bg-transparent" onClick={handleShow}>
          <img src={Images.editIcon} />
        </button>
      </div>

      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            componentClassName="custom-file"
            type="file"
            className="custom-file-input"
            onChange={handleUpload}
            name="image"
          />

          <Input
            type="text"
            placeholder="Username"
            className="form-control form-control-sm my-3"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Phone"
            className="form-control form-control-sm my-3"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            type="submit"
            className="btn-secondary text-light"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            size="sm"
            type="submit"
            className="back-primary text-light"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "loading..." : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditProfile;
