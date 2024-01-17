import PropTypes from "prop-types";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className ? className: ''}` } {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
}
export default Button;
