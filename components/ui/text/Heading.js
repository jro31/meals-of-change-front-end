const Heading = props => {
  return <h2 className={`text-4xl ${props.className || ''}`}>{props.children}</h2>;
};

export default Heading;
