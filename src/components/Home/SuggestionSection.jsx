import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Images from "../UI/Images";

const SuggestionSection = () => {
  return (
    <section className="suggestion ff-airbnb mb-10">
      <div className="title-section mb-4 mb-md-5">
        <h1>Popular For You!</h1>
      </div>
      <div className="row">
        <div className="left col-12 col-md-6">
          <img src={Images.suggestionImage} alt="Suggestion Image" />
          <div />
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

export default SuggestionSection;
