const Logo = props => {
  return (
    <span
      className={`font-serif font-black ${props.className || ''}`}
      style={{ fontSize: props.fontSize }}
      onClick={props.onClick || null}
    >
      Meals of Change
    </span>
  );
};

export default Logo;
