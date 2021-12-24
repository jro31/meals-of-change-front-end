const Heading = props => {
  return (
    <h2 className={`text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl ${props.className || ''}`}>
      {props.children}
    </h2>
  );
};

export default Heading;
