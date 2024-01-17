import PropTypes from "prop-types";

const Checkbox= ({  label, ...props }) => {
  return (
    <div className="mb-3 form-check">
      <input {...props}/>
      <label className="form-check-label">{label}</label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string
}

export default Checkbox;