const Subheading = props => {
  return <h3 className={`text-2xl ${props.className || ''}`}>{props.children}</h3>;
};

export default Subheading;
