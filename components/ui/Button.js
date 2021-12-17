const Button = props => {
  return (
    <button
      disabled={props.disabled || false}
      className='bg-gray-500 disabled:opacity-20 text-white p-3 rounded'
      onClick={props.onClick || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
