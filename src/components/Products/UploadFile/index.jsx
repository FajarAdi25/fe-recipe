import { CameraVideo, Image } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../../redux/actions/recipeAction";
import ReactPlayer from "react-player";

const UploadFile = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loading} = useSelector((state) => state.recipe)

  const [saveImage,setSaveImage] = useState("")
  const [showImage,setShowImage] = useState("")
  const [saveVideo,setSaveVideo] = useState("")
  const [showVideo,setShowVideo] = useState("")
  const [data, setData] = useState({
    title:"",
    videoName:"",
    ingredients:"",
});
  const handleChange = (e) => {
    setData({
       ...data,
       [e.target.name]: e.target.value,
     });
     // console.log(data)
   };
  const handleImageUpload =(e) => {
    const uploader = e.target.files[0];
    const reader  = new FileReader();
    reader.onload = () =>{
      setShowImage(reader.result);
    }
    reader.readAsDataURL(uploader)
    setSaveImage(e.target.files[0]);
  }
  const handleVideoUpload = (e) => {
    const videoFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSaveVideo(videoFile);
      setShowVideo(URL.createObjectURL(videoFile));
    };
    reader.readAsDataURL(videoFile);
  };

  const handleSubmit = async () => {
   try {
    dispatch(addRecipe({data, saveImage, saveVideo}))
    navigate("/profile")
    return alert("add recipe berhasil")
   } catch (error) {
    alert(error.data.message);
   }
  }
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
         name="videoName"
         placeholder="Video Name"
         onChange={handleChange}
         value={data.videoName}
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
          <ReactPlayer url={showVideo} controls width="40%" height="40%" style={{ objectFit: "fill",position:"absolute" }} />
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
         {loading ?  <div className="text-light spinner-border" />: "Post"}
        </Button>
      </div>
    </form>
  );
};

export default UploadFile;
