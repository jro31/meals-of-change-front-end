const Form = props => {
  return (
    <form className='bg-white rounded' onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
