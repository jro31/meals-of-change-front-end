const Button = props => {
  const themeClasses = () => {
    switch (props.theme) {
      case 'submit':
        return 'text-white bg-gradient-to-r from-slate-800 to-slate-500 disabled:from-slate-200 disabled:to-slate-100 hover:from-slate-900 hover:to-slate-600';
      case 'cancel':
        return 'bg-transparent border-2 border-slate-500';
      default:
        return 'text-white bg-gradient-to-r from-slate-800 to-slate-500 disabled:from-slate-200 disabled:to-slate-100 hover:from-slate-900 hover:to-slate-600';
    }
  };

  return (
    <button
      disabled={props.disabled || false}
      className={`${themeClasses()}  p-3 rounded-lg ${props.className || ''}`}
      onClick={props.onClick || null}
    >
      {props.children}
    </button>
  );
};

export default Button;
