import PropTypes from "prop-types";

const Input = ({ componentClassName, labelClassName, label, ...props }) => {
  return (
    <div className={`${componentClassName ? componentClassName : ""}`}>
      {props.label && (
        <label className={`${labelClassName ? labelClassName : ""}`}>
          {label}
        </label>
      )}
      {/* // <label className={`${labelClassName ? labelClassName : ""}`}>
      //   {label}
      // </label> */}
      <input {...props} />
    </div>
  );
};

Input.propTypes = {
  componentClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  label: PropTypes.any,
};

export default Input;
