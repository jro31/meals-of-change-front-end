const Button = props => {
  return (
    <button disabled={props.disabled} className='bg-gray-500 text-white p-3 rounded'>
      {props.children}
    </button>
  );
};

export default Button;
