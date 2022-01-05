const Button = props => {
  const submitClases =
    'text-white bg-gradient-to-r from-slate-400 to-slate-700 disabled:from-slate-200 disabled:to-slate-100 hover:from-slate-500 hover:to-slate-800';

  const themeClasses = () => {
    switch (props.theme) {
      case 'submit':
        return submitClases;
      case 'cancel':
        return 'bg-transparent border-2 border-slate-500';
      case 'plain':
        return 'bg-slate-800 hover:bg-slate-900';
      default:
        return submitClases;
    }
  };

  const standardClasses = 'p-2 sm:p-3';

  const sizeClasses = () => {
    switch (props.size) {
      case 'standard':
        return standardClasses;
      case 'small':
        return 'px-2 py-1';
      default:
        return standardClasses;
    }
  };

  return (
    <button
      disabled={props.disabled || false}
      className={`${themeClasses()} ${sizeClasses()} rounded-lg ${props.className || ''}`}
      onClick={props.onClick || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
