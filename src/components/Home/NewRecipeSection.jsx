import { Link } from "react-router-dom";
import Images from "../UI/Images";
import Button from "../UI/Button";

const NewRecipeSection = () => {
  return (
    <section className="new ff-airbnb mb-10">
      <div className="title-section mb-4 mb-md-5">
        <h1>New Recipe</h1>
      </div>
      <div className="row">
        <div className="left col-12 col-md-6">
          <img src={Images.newRecipeImage} alt="New Recipe Image" />
        </div>
        <div className="right col-12 col-md-6">
          <div>
            <h1>Healthy Bone Broth Ramen (Quick &amp; Easy)</h1>
            <hr />
            <p>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Link to="/detail">
              <Button
                className="back-primary text-light"
                style={{ width: 150 }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <br/>
    </section>
  );
};

export default NewRecipeSection;
