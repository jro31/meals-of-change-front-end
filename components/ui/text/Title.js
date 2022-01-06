const Title = props => {
  return (
    <h1
      className={`text-4xl sm:text-5xl xl:text-6xl font-serif font-extralight text-white ${
        props.className || ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Title;
