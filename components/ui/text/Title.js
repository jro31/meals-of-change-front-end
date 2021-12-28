const Title = props => {
  return (
    <h1
      className={`text-2xl leading-6 sm:text-3xl lg:text-4xl 2xl:text-6xl font-serif ${
        props.className || ''
      }`}
    >
      {props.children}
    </h1>
  );
};

export default Title;
