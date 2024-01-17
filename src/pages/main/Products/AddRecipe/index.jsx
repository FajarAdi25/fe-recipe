import UploadFile from '../../../../components/Products/UploadFile'
import "../../../../styles/add.css"

const AddRecipe = () => {
  return (
    <div className="container mb-5 mt-3">
    {/* add */}
    <section className="add ff-airbnb">
      <UploadFile/>
    </section>
  </div>
  )
}

export default AddRecipe