import ModalEditProduct from "../../Products/ModalEditProduct";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ModalDeleteProduct from "../../Products/ModalDeleteProduct";

const CardRecipe = ({ withActionButton, data, ...props }) => {
  const navigate = useNavigate();

  const handleRecipeClick = (id) => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      navigate(`/detailRecipe/${id}`);
    }
  };
  return (
    <div className="container">
      {withActionButton && (
        <div className="col" {...props}>
          <div className="card border-0">
            <div className="card-body p-0">
              <img
                src={data.image}
                alt={data.title}
                onClick={() => handleRecipeClick(data.id)}
              />
              <p className="title back-primary text-dark">{data.title}</p>
              <div className="action">
                <ModalEditProduct recipeId={data.id} />
                <ModalDeleteProduct recipeId={data.id} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CardRecipe.propTypes = {
  withActionButton: PropTypes.any,
  data: PropTypes.any,
};
export default CardRecipe;
