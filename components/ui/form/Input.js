import InputError from './InputError';

const Input = props => {
  return (
    <div className={`relative mt-1 ${props.className || ''}`}>
      <div className='flex flex-col w-full'>
        <div className='h-6'>
          <InputError showError={props.showError}>{props.errorMessage}</InputError>
        </div>
        <input
          type={props.type || 'text'}
          required={props.required || false}
          id={props.id || null}
          value={props.value}
          onChange={props.onChange || null}
          onBlur={props.onBlur || null}
          onKeyDown={props.onKeyDown || null}
          onKeyUp={props.onKeyUp || null}
          className='peer text-slate-400 border border-slate-300 bg-slate-100 p-2 text-lg rounded-lg focus:outline-none placeholder-transparent focus:ring-0 focus:border-slate-400 focus:bg-slate-200'
          placeholder={props.label || null}
          checked={props.type === 'checkbox' ? props.checked : null}
          min={props.min || null}
        />
        {props.id && props.label && (!props.showError || !props.errorMessage) && (
          <label
            htmlFor={props.id}
            className='absolute transition-all left-0 top-0 text-slate-200 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-300 peer-placeholder-shown:left-2.5 peer-placeholder-shown:top-8 peer-focus:left-0 peer-focus:top-0 peer-focus:text-slate-200 peer-focus:text-base'
          >
            {props.label}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
