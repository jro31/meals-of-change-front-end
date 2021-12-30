const Subheading = props => {
  return (
    <h3 className={`text-3xl font-thin text-gray-300 ${props.className || ''}`}>
      {props.children}
    </h3>
  );
};

export default Subheading;
