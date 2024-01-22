import { useDispatch, useSelector } from "react-redux";
import "../../../../styles/detail.css";
import commentPhoto from "../../../../assets/img/ayudia.png";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailRecipe } from "../../../../redux/actions/recipeAction";
import { useEffect } from "react";
import { Bookmark, Heart, Play } from "react-bootstrap-icons";
const DetailRecipe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const urlParams = useParams();
  useEffect(() => {
    dispatch(getDetailRecipe(urlParams.id));
  }, []);
  const { loading, recipeList } = useSelector((state) => state.recipe);

  const handleRecipeClick = (id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailVideo/${id}`);
    }
  };
  return (
    <div className="container">
      {/* detail */}
      <section className="detail ff-airbnb mb-5">
        {loading ? (
          "loading...."
        ) : (
          <div className="row">
            <h1 className="display-5 text-center color-blue">
              {recipeList.title}
            </h1>
            <div className="text-center mb-5 position-relative">
              <img className="mt-4" alt="Recipe Image" src={recipeList.image} />
              <div className="icon">
                <i
                  className="icon-item back-primary text-light p-3 fs-5 rounded-3 me-1"
                  // onClick={handleSaved}
                >
                  <Bookmark />
                </i>
                <i
                  className="icon-item back-primary text-light p-3 fs-5 rounded-3 me-1"
                  // onClick={handleLike}
                >
                  <Heart />
                </i>
              </div>
            </div>
          </div>
        )}
        <div className="ingredients mb-4">
          <h1 className="fs-2 mb-3">Ingredients</h1>
        </div>

        <div className="desk">
          <ul>{recipeList.ingredients}</ul>
        </div>
        <div className="video-step">
          <h1 className="fs-2 mb-3">Video Step</h1>
          <i
            className="btn back-primary text-light"
            onClick={() => {
              handleRecipeClick(recipeList.id);
            }}
          >
            <Play />
          </i>
        </div>
      </section>
      <section id="comment" style={{ marginTop: "7vw", marginLeft: "10vw" }}>
        <div className="">
          <textarea
            className="rounded-2 p-sm-3 ps-2 fs-6"
            placeholder="Comment: "
            defaultValue={""}
          />
          <button
            id="btn-send"
            style={{ width: "21vw", marginLeft: "22vw", marginTop: "1vw" }}
            className="btn btn-warning text-light"
          >
            Send
          </button>
        </div>
        <div id="userComment" style={{ marginTop: "4vw" }}>
          <h3>Comment</h3>
          <div className="d-flex" style={{ marginTop: "2.5vw" }}>
            <img src={commentPhoto} alt="avatar-ayudia" />
            <div className="text-capitalize" style={{ marginLeft: "2vw" }}>
              <p>Ayudia</p>
              <p className="fw-light">
                Nice recipe. simple and delicious, thankyou
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailRecipe;
