import classes from './Flexbox.module.css';

const Flexbox = props => {
  const directionClass = () => {
    switch (true) {
      case props.row:
        return classes.row;
      case props.column:
        return classes.column;
      default:
        return '';
    }
  };

  const justifyContentClass = () => {
    switch (true) {
      case props.justifyStart:
        return classes['justify-start'];
      case props.justifyEnd:
        return classes['justify-end'];
      case props.justifyCenter:
        return classes['justify-center'];
      case props.justifyBetween:
        return classes['justify-between'];
      case props.justifyAround:
        return classes['justify-around'];
      case props.justifyEvenly:
        return classes['justify-evenly'];
      default:
        return '';
    }
  };

  const alignItemsClass = () => {
    switch (true) {
      case props.alignStart:
        return classes['align-start'];
      case props.alignEnd:
        return classes['align-end'];
      case props.alignCenter:
        return classes['align-center'];
      case props.alignBaseline:
        return classes['align-baseline'];
      default:
        return '';
    }
  };

  const widthClass = () => {
    switch (true) {
      case props.w100:
        return classes.w100;
      case props.w50:
        return classes.w50;
      default:
        return '';
    }
  };

  return (
    <div
      onClick={props.onClick || null}
      className={`${
        classes.flex
      } ${directionClass()} ${justifyContentClass()} ${alignItemsClass()} ${widthClass()} ${
        props.className || ''
      }`}
      ref={props.refName || null}
      style={props.style || null}
    >
      {props.children}
    </div>
  );
};

export default Flexbox;
