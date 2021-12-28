const Button = props => {
  return (
    <button
      disabled={props.disabled || false}
      className={`bg-gray-500 disabled:bg-gray-200 text-white p-3 rounded ${props.className || ''}`}
      onClick={props.onClick || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
