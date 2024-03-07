import { CameraVideo, Image } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecipe,
  getRecipeByUserId,
} from "../../../redux/actions/recipeAction";
import ReactPlayer from "react-player";
import Swal from "sweetalert2";

const UploadFile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.recipe);

  const [saveImage, setSaveImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const [saveVideo, setSaveVideo] = useState("");
  const [showVideo, setShowVideo] = useState("");
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({
    title: "",
    video_name: "",
    ingredients: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data)
  };
  const handleImageUpload = (e) => {
    const MAX_FILE_SIZE = 5120; // 5MB

    const uploader = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setShowImage(reader.result);
    };

    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    const fileSizeKiloBytes = uploader.size / 1024;

    if (!allowedTypes.includes(uploader?.type)) {
      setIsError(true);
      Swal.fire({
        title: "Failed",
        text: "Type File is not match",
        icon: "error",
      });

      return;
    }
    if (fileSizeKiloBytes > MAX_FILE_SIZE) {
      setIsError(true);
      Swal.fire({
        title: "Failed",
        text: "File size is too large",
        icon: "error",
      });
      return;
    }
    setIsError(false);
    reader.readAsDataURL(uploader);
    setSaveImage(e.target.files[0]);
  };
  const handleVideoUpload = (e) => {
    const videoFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSaveVideo(videoFile);
      setShowVideo(URL.createObjectURL(videoFile));
    };
    reader.readAsDataURL(videoFile);
  };

  const handleSubmit = () => {
    try {
      dispatch(addRecipe({ data, saveImage, saveVideo }));
      Swal.fire({
        title: "Success",
        text: "Add Recipe Success",
        icon: "success",
      });
      navigate("/profile");
      dispatch(getRecipeByUserId());
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Add Recipe Failed",
        icon: "error",
      });
    }
  };
  return (
    <form action="">
      <div className="photo mb-3">
        <input
          name="image"
          type="file"
          className="form-control form-control-lg opacity-0 "
          onChange={handleImageUpload}
          // value={data}
        />
        {isError}

        {showImage && (
          <img
            src={showImage || ""}
            className="position-absolute"
            style={{ width: "40%", height: "40%", objectFit: "contain" }}
            alt="Uploaded"
          />
        )}
        <Image />
        <p className="mt-2">Add Photo</p>
      </div>
      <div className="mb-3">
        <input
          name="title"
          type="text"
          className="form-control form-control-sm p-3"
          placeholder="Title"
          onChange={handleChange}
          value={data.title}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="ingredients"
          name="ingredients"
          rows={10}
          placeholder="Ingredients"
          onChange={handleChange}
          value={data.ingredients}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-sm p-3"
          name="video_name"
          placeholder="Video Name"
          onChange={handleChange}
          value={data.video_name}
        />
      </div>
      <div className="photo mb-3">
        <input
          name="image"
          type="file"
          className="form-control form-control-lg opacity-0 "
          onChange={handleVideoUpload}
          // value={data.video}
        />
        {showVideo && (
          <ReactPlayer
            url={showVideo}
            controls
            width="40%"
            height="40%"
            style={{ objectFit: "fill", position: "absolute" }}
          />
        )}
        <CameraVideo />
        <p className="mt-2">Add Video</p>
      </div>
      <div className="d-flex justify-content-center ">
        <Button
          type="submit"
          className="back-primary w-100 text-light"
          onClick={handleSubmit}
        >
          {loading ? <div className="text-light spinner-border" /> : "Post"}
        </Button>
      </div>
    </form>
  );
};

export default UploadFile;
