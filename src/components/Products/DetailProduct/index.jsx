// import { Bookmark, Heart, Play } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// const DetailProduct = ({ item }) => {
//   return (
//     <section className="detail ff-airbnb mt-5 mb-5">
//         <div className="row">
//           <h1 className="display-5 text-center color-blue">{item.title}</h1>
//           <div className="text-center mb-5 position-relative">
//             <img className="mt-4" alt="Recipe Image" src={item.image} />
//             <div className="icon">
//               <i className="icon-item back-primary text-light p-3 fs-5 rounded-3 me-1">
//                 <Bookmark />
//               </i>
//               <i className="icon-item back-primary text-light p-3 fs-5 rounded-3 me-1">
//                 <Heart />
//               </i>
//             </div>
//           </div>
//         </div>
//       <div className="ingredients mb-4">
//         <h1 className="fs-2 mb-3">Ingredients</h1>

//         <div className="desk">
//           {item?.ingredients.split("-").map((ingredient, subIndex) => (
//             <span key={subIndex}>
//               <p className="desk">{ingredient}</p>
//             </span>
//           ))}
//         </div>
//       </div>
//       <div className="video-step">
//         <h1 className="fs-2 mb-3">Video Step</h1>
//         <Link
//           to={`/recipe/${item.id}/video`}
//           className="back-primary text-light"
//         >
//           <i className="btn back-primary text-light">
//             <Play />
//           </i>
//         </Link>
//       </div>
//     </section>
//   );
// };

// DetailProduct.propTypes = {
//   item: PropTypes.any
// };

// export default DetailProduct;
