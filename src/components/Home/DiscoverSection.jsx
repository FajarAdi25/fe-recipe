import { Search } from "react-bootstrap-icons";
import Images from "../UI/Images";
import Input from "../UI/Input";

const DiscoverSection = () => {
  return (
    <section className="hero row">
      <div className="content col-10 col-sm-9 d-flex flex-column justify-content-center ff-airbnb">
        <h1 className="display-5 mb-3">Discover Recipe &amp; Delicious Food</h1>
        <div className="search mb-3">
          <div className="icon py-2 px-4" onClick="">
            <Search />
          </div>
          <Input
          type="search"
          className="form-control p-3"
          id="search"
          placeholder="Search Restaurant, Food"
          />
          {/* <input
            type="search"
            className="form-control p-3"
            id="search"
            placeholder="Search Restaurant, Food"
          /> */}
        </div>
      </div>
      <div className="decoration col-2 col-sm-3 d-flex align-items-center back-primary">
        <div className="d-none d-md-block">
          <img src={Images.heroImage} alt="Hero Image" />
        </div>
      </div>
      <br />
    </section>
  );
};

export default DiscoverSection;
