import recipeCalls from "../../services/recipeCalls";

export const getRecipeByUserId = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_USER_RECIPES_REQUEST",
    });
    const id = localStorage.getItem("id");
    const response = await recipeCalls.getRecipeByUserIdDB(id)
    const recipe = response.data.data;
    dispatch({
      type: "GET_USER_RECIPES_SUCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "GET_USER_RECIPES_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}
export const getAllRecipe = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_RECIPES_REQUEST",
    });
    const response = await recipeCalls.getAllRecipeDB()
    const recipe = response.data.data;
    dispatch({
      type: "GET_ALL_RECIPES_SUCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "GET_ALL_RECIPES_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}

export const addRecipe = ({ data, saveImage, saveVideo }) => async (dispatch) => {
  try {
    // dispatch({
    //   type: "ADD_RECIPE_REQUEST"
    // });
    const userId = localStorage.getItem("id")
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", saveImage);
    formData.append("video", saveVideo);
    formData.append("videoName", data.videoName);
    formData.append("ingredients", data.ingredients);
    formData.append("userId", userId);

    const response = await recipeCalls.addRecipeDB(formData)
    const recipe = response.data.data
    dispatch({
      type: "ADD_RECIPE_SUCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "ADD_RECIPE_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}

export const editRecipe = ({ recipeId, data, saveImage, saveVideo }) => async (dispatch) => {
  try {
     dispatch({
      type: "ADD_RECIPE_REQUEST"
    });
    const id = recipeId
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", saveImage);
    formData.append("video", saveVideo);
    formData.append("videoName", data.videoName);
    formData.append("ingredients", data.ingredients);
    
    const response = await recipeCalls.editRecipeDB(id,formData)
    const recipe = response.data.data
    dispatch({
      type: "EDIT_RECIPE_SUCCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "EDIT_RECIPES_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}
export const getDetailRecipe = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_RECIPE_DETAIL_REQUEST"
    })

    const response = await recipeCalls.getRecipeByIdDB(id)
    const recipe = response.data.data
    console.log(recipe)
    dispatch({
      type: "GET_RECIPE_DETAIL_SUCCESS",
      payload: recipe
    })
  } catch (error) {
    dispatch({ type: "GET_RECIPE_DETAIL_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DETAIL_RECIPE_REQUEST"
    })

    await recipeCalls.deleteRecipeDB(id)

    dispatch({
      type: "DELETE_RECIPES_SUCCESS",
      payload: id
    })
  } catch (error) {
    dispatch({ type: "DELETE_RECIPES_FAILED", payload: error.response.data.message });
    throw error.response;
  }
}