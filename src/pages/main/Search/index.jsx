import { Search } from 'react-bootstrap-icons'

const SearchPage = () => {
    const handleSearch = () => {

    }

  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
        <div className="input-group flex-grow-1 me-2 w-50">
          <input
            type="text"
            className="form-control form-control-md"
            placeholder="Search Restaurant Food"
            aria-label=".form-control-lg example"
            name="searchQuery"
            value=""
            onChange=""
          />
          <span className="input-group-text px-3" onClick={handleSearch}>
            <Search />
          </span>
        </div>
        <div className="d-flex align-items-center">
          <select
            className="form-select form-select-md"
            aria-label="Default select example"
            value=""
            onChange=""
          >
            <option value="">Sort By</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row">
       
          </div>
      </div>
    </>
  )
}

export default SearchPage