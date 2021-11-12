import classes from './Flexbox.module.css';

const Flexbox = props => {
  console.log(props);
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

  return (
    <div
      className={`${
        classes.flex
      } ${directionClass()} ${justifyContentClass()} ${alignItemsClass()} ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Flexbox;
