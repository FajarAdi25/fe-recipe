import { useDispatch, useSelector } from "react-redux";
import "../../../../styles/detail.css";
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
    </div>
  );
};

export default DetailRecipe;
