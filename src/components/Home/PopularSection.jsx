import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipe } from "../../redux/actions/recipeAction";

const PopularSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, recipeList } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getAllRecipe());
  }, [recipeList]);

  const handleRecipeClick = (id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailRecipe/${id}`);
    }
  };

  return (
    <>
    <section className="popular ff-airbnb mt-4 mb-10">
      <div className="title-section mb-4 mb-md-5">
        <h1>Popular Recipe</h1>
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {recipeList.length ? (
            recipeList.map((item, index) => (
                <div className="col" key={index}>
                <div
                  className="card align-items-center"
                  onClick={() => handleRecipeClick(item.id)}
                >
                  <p className="title back-primary text-dark">{item.title}</p>
                  <img src={item.image} className="card-img-top" alt="" />
                </div>
              </div>
            ))
          ) : (
            <p>No Recipe</p>
          )}
          </div>
          <div className="d-flex justify-content-center mt-3 text-light">
            {/* <Pagination>
                        {Array.from({
                          length: Math.ceil(recipe?.data?.length / RecipePerPage),
                        }).map((_, index) => (
                          <Pagination.Item
                            key={index}
                            active={index + 1 === currentPage}
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </Pagination.Item>
                        ))}
                      </Pagination> */}
          </div>
        </div>
      )}
    </section>
    </>
  );
};
export default PopularSection;
