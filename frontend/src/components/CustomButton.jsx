import PropTypes from "prop-types";

const CustomButton = (props) => {
  const { text, onClick = () => {}, icon, extraStyles, disabled } = props;

  return (
    <button
      className={
        `text-md rounded-md flex gap-x-2 items-center px-3 py-2 ${extraStyles}` +
        ` ${
          disabled
            ? "cursor-not-allowed"
            : "hover:bg-opacity-80 transition-colors duration-300 ease-in-out hover:shadow-md"
        } `
      }
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {text}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.element,
  extraStyles: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomButton;
