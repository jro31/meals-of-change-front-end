const Title = props => {
  return (
    <h1 className={`text-6xl font-serif font-extralight text-white ${props.className || ''}`}>
      {props.children}
    </h1>
  );
};

export default Title;
