import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { editRecipe } from "../../../redux/actions/recipeAction";
import PropTypes from "prop-types";

const ModalEditProduct = ({ recipeId }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [saveImage, setSaveImage] = useState("");
  const { loading, recipeList } = useSelector((state) => state.recipe);
  let [data, setData] = useState({
    title: "",
    image: saveImage,
    ingredients: "",
  });
  useEffect(() => {
    setData({
      title: recipeList.title,
      image: recipeList,
      ingredients: recipeList.ingredients,
    });
  }, [recipeList, saveImage]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  };

  const handleSubmit = async () => {
    try {
      dispatch(
        editRecipe({
          recipeId: recipeId,
          data,
          saveImage,
        })
      );
      window.location.reload();
      handleClose();
      return alert("update recipe berhasil");
    } catch (error) {
      alert(error.data.message);
    }
  };
  return (
    <div className="container">
      {/* <!-- Button trigger modal --> */}
      <div className="dropdown">
        <button className="text-dark back-primary p-2" onClick={handleShow}>
          <Pencil />
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
            onChange={handleUploadImage}
            name="image"
          />

          <Input
            type="text"
            placeholder="Title"
            className="form-control form-control-sm my-3"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ingredients"
            className="form-control form-control-sm my-3"
            name="ingredients"
            value={data.ingredients}
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

ModalEditProduct.propTypes = {
  recipeId: PropTypes.any,
};

export default ModalEditProduct;
