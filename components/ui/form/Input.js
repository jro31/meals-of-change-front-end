const Input = props => {
  return (
    <input
      type={props.type || 'text'}
      required={props.required || false}
      id={props.id || ''}
      value={props.value}
      onChange={props.onChange || null}
      onBlur={props.onBlur || null}
    />
  );
};

export default Input;
