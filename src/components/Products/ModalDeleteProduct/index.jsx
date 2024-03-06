import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import Button from "../../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRecipe,
  getRecipeByUserId,
} from "../../../redux/actions/recipeAction";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const ModalDeleteProduct = ({ recipeId }) => {
  const id = recipeId;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { loading } = useSelector((state) => state.recipe);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      await dispatch(deleteRecipe(id));

      Swal.fire({
        title: "Success",
        text: "Delete Success",
        icon: "success",
      });
      handleClose();
      dispatch(getRecipeByUserId());
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: "Delete Recipe Failed",
        icon: "failed",
      });
    }
  };
  return (
    <div className="container">
      {/* <!-- Button trigger modal --> */}
      <div className="dropdown">
        <button className="text-dark back-primary p-2" onClick={handleShow}>
          <Trash />
        </button>
      </div>

      {/* <!-- Modal --> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete My Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="ff-airbnb"> Are you sure?</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            type="submit"
            className="btn-secondary text-light"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            size="sm"
            type="submit"
            className="back-primary text-light"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "loading..." : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalDeleteProduct.propTypes = {
  recipeId: PropTypes.any,
};
export default ModalDeleteProduct;
