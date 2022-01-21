const Form = props => {
  return (
    <form onSubmit={props.onSubmit} className={props.className || null} id={props.id || null}>
      {props.children}
    </form>
  );
};

export default Form;
