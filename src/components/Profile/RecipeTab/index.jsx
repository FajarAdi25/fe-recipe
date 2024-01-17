import CardRecipe from "../CardRecipe";
import PropTypes from "prop-types";
import "../../../styles/profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRecipeByUserId } from "../../../redux/actions/recipeAction";

const likedRecipe = 0;
const savedRecipe = 0;

const RecipeTab = ({ openTab, setOpenTab }) => {
  const dispatch = useDispatch();

  const { recipeList } = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(getRecipeByUserId());
  }, []);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => setOpenTab("myRecipe")}
            className={`text-secondary nav-link ${
              openTab === "myRecipe" ? "active" : ""
            }`}
            aria-current="page"
          >
            My Recipe
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setOpenTab("savedRecipe")}
            className={`text-secondary nav-link ${
              openTab === "savedRecipe" ? "active" : ""
            }`}
            aria-current="page"
          >
            Saved Recipe
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => setOpenTab("likedRecipe")}
            className={`text-secondary nav-link ${
              openTab === "likedRecipe" ? "active" : ""
            }`}
            aria-current="page"
          >
            Liked Recipe
          </button>
        </li>
      </ul>

      {openTab === "myRecipe" && (
        <div
          id="recipe"
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-2"
        >
          {recipeList.length ? (
            recipeList.map((item, index) => (
              <CardRecipe key={index} data={item} withActionButton />
            ))
          ) : (
            <p>No Recipe</p>
          )}
        </div>
      )}
      {openTab === "savedRecipe" && (
        <div
          id="recipe"
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-2"
        >
          {savedRecipe.length ? (
            savedRecipe.map((recipe, index) => (
              <CardRecipe key={index} recipe={recipe} />
            ))
          ) : (
            <p>No Recipe</p>
          )}
        </div>
      )}
      {openTab === "likedRecipe" && (
        <div
          id="recipe"
          className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-4 mt-2"
        >
          {likedRecipe.length ? (
            likedRecipe.map((item, index) => (
              <CardRecipe key={index} item={item} />
            ))
          ) : (
            <p>No Recipe</p>
          )}
        </div>
      )}
    </div>
  );
};

RecipeTab.propTypes = {
  openTab: PropTypes.any,
  setOpenTab: PropTypes.any,
  recipe: PropTypes.any,
};
export default RecipeTab;
