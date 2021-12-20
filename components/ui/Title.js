const Title = props => {
  return <h1 className={`text-6xl ${props.className || ''}`}>{props.children}</h1>;
};

export default Title;
