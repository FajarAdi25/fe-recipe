import { useDispatch, useSelector } from "react-redux";
import ModalEditProfile from "../ModalEditProfile";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getUser } from "../../../redux/actions/userAction";
import Images from "../../UI/Images";

const MainProfile = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <section className="profile ff-airbnb text-center mb-5">
      <div className="d-flex justify-content-center">
        <div className="position-relative">
          <img
            className="picture rounded-circle"
            src={user?.image == "null" ? Images.profileDefault : user.image}
            alt="Profile Picture"
          />

          <ModalEditProfile />
        </div>
      </div>
      <p className="fs-5 mt-3">{user?.username}</p>
    </section>
  );
};

MainProfile.propTypes = {
  index: PropTypes.any,
  data: PropTypes.any,
  key: PropTypes.any,
};

export default MainProfile;
