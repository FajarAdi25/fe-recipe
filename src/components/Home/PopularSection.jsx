import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllRecipe } from "../../redux/actions/recipeAction";

const PopularSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    page: 1,
    take: 3,
  });

  const { loading, recipeList } = useSelector((state) => state.recipe);

  useEffect(() => {
    const { page, take } = params;
    dispatch(getAllRecipe({ page, take }));
  }, [dispatch, params]);

  const handleRecipeClick = (id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailRecipe/${id}`);
    }
  };

  const handleNextPage = () => {
    setParams({
      ...params,
      page: params.page + 1,
    });
  };
  const handlePrevPage = () => {
    setParams({
      ...params,
      page: params.page - 1,
    });
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
                      <p className="title back-primary text-dark">
                        {item.title}
                      </p>
                      <img src={item.image} className="card-img-top" alt="" />
                    </div>
                  </div>
                ))
              ) : (
                <p>No Recipe</p>
              )}
            </div>
            <br />
            <div className="d-grid justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item" onClick={handlePrevPage}>
                    <span className="page-link back-primary text-light">
                      Prev
                    </span>
                  </li>
                  <li className="page-item">
                    <span className="page-link text-dark">{params.page}</span>
                  </li>
                  <li className="page-item" onClick={handleNextPage}>
                    <span className="page-link back-primary text-light">
                      Next
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </section>
    </>
  );
};
export default PopularSection;
