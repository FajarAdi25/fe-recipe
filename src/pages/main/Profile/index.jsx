import { useState } from "react";
import MainProfile from "../../../components/Profile/MainProfile";
import "../../../styles/profile.css"
import RecipeTab from "../../../components/Profile/RecipeTab";

const Profile = () => {
  
  const [openTab, setOpenTab] = useState("myRecipe");

  return (
    <div className="container mt-5 mb-5">
      {/* profile */}
      <MainProfile/>
      {/* recipe */}
    <section className="recipe ff-airbnb">
      <RecipeTab
      openTab={openTab}
      setOpenTab={setOpenTab}
      />
    </section>
    </div>
  );
};

export default Profile;
