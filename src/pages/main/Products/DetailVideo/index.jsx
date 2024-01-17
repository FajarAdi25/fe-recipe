/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailRecipe } from '../../../../redux/actions/recipeAction';
import Images from '../../../../components/UI/Images';
import "../../../../styles/video.css"

const DetailVideoRecipe = () => {
  const dispatch = useDispatch();
  const urlParams = useParams();

  useEffect(() => {
    dispatch(getDetailRecipe(urlParams.id));
  }, []);
  const { loading, recipeList } = useSelector((state) => state.recipe);
  return (

    <div className="container-fluid">
    <div className="row ff-airbnb">
      {/* video */}
     {loading? ("loading...") : (
      <section className="col-12 col-lg-9">
        <div className="row me-4"/>
          <div className="col-6">
            <div className="video ">
              <iframe
                width={720}
                height={480}
                src={recipeList.video}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen=""
                />
              <p className="fs-4 mt-3 mb-1">{recipeList.title}</p>
              <p className="text-secondary">{recipeList.created_at}</p>
            </div>
          </div>
      </section>
      )}
      {/* other recipe */}
      <aside className="col-lg-3 d-none d-lg-block">
        <div className="other">
          <p className="fs-4">Other Recipe</p>
          <div className="card my-2 mx-2 border-0">
            <img
              src={Images.popular1Image}
              className="card-img-top"
              alt="Chiken Kare"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  className="text-decoration-none text-dark"
                  href="/detail.html"
                >
                  Chiken Kare
                </a>
              </h5>
              <p className="text-secondary">
                <a
                  href="/profile.html"
                  className="text-secondary text-decoration-none"
                >
                </a>
                - 3 month ago
              </p>
            </div>
          </div>
          <div className="card my-2 mx-2 border-0">
            <img
              src={Images.popular2Image}
              className="card-img-top"
              alt="Bomb Chicken"
            />
            <div className="card-body">
              <h5 className="card-title">
                <a
                  className="text-decoration-none text-dark"
                  href="/detail.html"
                >
                  Bomb Chicken
                </a>
              </h5>
              <p className="text-secondary">
                <a
                  href="/profile.html"
                  className="text-secondary text-decoration-none"
                >
                </a>
                - 3 month ago
              </p>
            </div>
          </div>
          </div>
      </aside>
    </div>
  </div>
  )
}

export default DetailVideoRecipe