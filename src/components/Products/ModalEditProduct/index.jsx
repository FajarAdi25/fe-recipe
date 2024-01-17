import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { editRecipe } from "../../../redux/actions/recipeAction";

const ModalEditProduct = ({recipeId, data}) => {
  const dispatch = useDispatch();
  const id = recipeId

  const [show, setShow] = useState(false);
  const [saveImage, setSaveImage] = useState("");
  const [saveVideo, setSaveVideo] = useState("");
  const { loading, recipeList } = useSelector((state) => state.recipe);
  let [form, setForm] = useState({
    title: "",
    image: saveImage,
    video: saveVideo,
    videoName: "",
    ingredients: "",
  });

  useEffect(() => {
    setForm({
      title: recipeList.title,
      image: recipeList,
      video: recipeList,
      videoName: recipeList.videoName,
      ingredients: recipeList.ingredients,
    });
  },[recipeList, saveImage, saveVideo]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadImage = (e) => {
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  };
  const handleUploadVideo = (e) => {
    const uploader = e.target.files[0];
    setSaveVideo(uploader);
  };

  const handleSubmit = async () => {
    try {
      dispatch(editRecipe({
        recipeId: id,
        data,
        saveImage,
        saveVideo
      }))
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
            value={form.title}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Ingredients"
            className="form-control form-control-sm my-3"
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Video Name"
            className="form-control form-control-sm my-3"
            name="videoName"
            value={form.videoName}
            onChange={handleChange}
          />
          <Input
            componentClassName="custom-file"
            type="file"
            className="custom-file-input"
            onChange={handleUploadVideo}
            name="video"
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

export default ModalEditProduct;
