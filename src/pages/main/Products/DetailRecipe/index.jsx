import { useDispatch, useSelector } from "react-redux";
import "../../../../styles/detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailRecipe } from "../../../../redux/actions/recipeAction";
import { useEffect } from "react";
import { Bookmark, Heart, Play } from "react-bootstrap-icons";
import Images from "../../../../components/UI/Images";
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
      <section className="comment ff-airbnb mb-10">
        <div className="form-comment mb-4">
          <form>
            <div className="mb-3">
              <textarea
                className="form-control px-3 py-4"
                placeholder="Comment"
                id="comment"
                rows="10"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn back-primary w-100 text-light mb-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="list-comment">
          <h1 className="fs-2 mb-3">Comment</h1>
          <div className="row">
            <div className="col-3 col-sm-2 col-lg-1 d-flex justify-content-center">
              <a href="/profile.html">
                <img
                  src={Images.photoProfile}
                  className="rounded-circle"
                  alt="Photo Profile"
                />
              </a>
            </div>
            <div className="col-9 col-sm-10 col-lg-11 d-flex flex-column justify-content-center">
              <a
                href="/profile.html"
                className="m-0 text-decoration-none text-dark"
              >
                <strong>Andin</strong>
              </a>
              <p className="m-0 text-break">
                Nice recipe. simple and delicious, thankyou.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailRecipe;
