import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../../../redux/actions/recipeAction";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import "../../../styles/search.css";

const SearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [params, setParams] = useState({
    page: 1,
    take: 3,
    sort: "",
    search: "",
  });

  const { loading, recipeList } = useSelector((state) => state.recipe);

  useDebounce(
    () => {
      setParams({
        ...params,
        search: search,
      });
    },
    [search],
    1500
  );

  useEffect(() => {
    const { page, take, search, sort } = params;
    dispatch(getAllRecipe({ page, take, search, sort }));
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

  const handleSearch = (e) => {
    setParams({
      ...params,
      search: e.target.value,
    });
  };

  const handleSorting = (e) => {
    const value = e.target.value;
    if (value === "ASC") {
      setParams({
        ...params,
        sort: "ASC",
      });
    } else if (value === "DESC") {
      setParams({
        ...params,
        sort: "DESC",
      });
    }
  };

  return (
    <>
      <br />
      <br />
      <div className="search">
        <div className="container">
          <div className="mt-5 mb-5 d-flex justify-content-between">
            <div className="input-group flex-grow-1 me-2 w-50">
              <input
                type="text"
                className="form-control form-control-md"
                placeholder="Search Restaurant Food"
                aria-label=".form-control-lg example"
                name="searchQuery"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="input-group-text px-3">
                <Search />
              </span>
            </div>
            <div className="d-flex align-items-center">
              <select
                className="form-select form-select-md"
                aria-label="Default select example"
                onChange={handleSorting}
              >
                <option value="">Sort By</option>
                <option value="ASC">A-Z</option>
                <option value="DESC">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-card">
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
      </div>
    </>
  );
};

export default SearchPage;
