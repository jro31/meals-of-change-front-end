const Form = props => {
  return (
    <form className='bg-white rounded px-20 py-6' onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
