import userCalls from "../../services/userCalls";

export const register = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "REGISTER_REQUEST",
    });
    const response = await userCalls.registerDB(data);
    const user = response.data.data;
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({ type: "REGISTER_FAILED", payload: error.response.data.message });
    throw error.response;
  }
};

export const login = (data) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });
    const response = await userCalls.loginDB(data);
    const user = response.data.data;
    // console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("reaccessToken", user.reaccessToken);
    localStorage.setItem("id", user.id);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: user,
    });
    return user;
  } catch (error) {
    dispatch({ type: "LOGIN_FAILED", payload: error.response.data.message });
    throw error.response;
  }
};

export const getUser = () => async (dispatch) => {

  try {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    const id = localStorage.getItem("id");
    const response = await userCalls.getUserDB(id);
    const user = response.data.data
    dispatch({
      type: "GET_USER_SUCCESS",
      payload: user,
    });
  } catch (error) {
    dispatch({ type: "GET_USER_FAILED", payload: error.response.data.message });
    throw error.response;
  }
};

export const editUser = ({data, saveImage}) => async (dispatch) => {
  try {
    dispatch({
      type: "EDIT_USER_REQUEST",
    });

    const id = localStorage.getItem("id")
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("phone", data.phone);
    formData.append("image", saveImage);

    const response = await userCalls.editUserDB(id,formData)
    const recipe = response.data.data
    dispatch({
      type: "EDIT_USER_SUCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "EDIT_USER_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}

