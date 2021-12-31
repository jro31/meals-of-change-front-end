import InputError from './InputError';

const Input = props => {
  return (
    <div className='relative mt-1'>
      <div className='flex flex-col w-full'>
        <div className='h-6 pl-2'>
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
          className={`text-slate-400 peer border border-slate-300 bg-slate-100 p-2 text-lg rounded-lg focus:outline-none placeholder-transparent focus:ring-0 focus:border-slate-400 focus:bg-slate-200 ${
            props.className || ''
          }`}
          placeholder={props.label || null}
          checked={props.type === 'checkbox' ? props.checked : null}
        />
        {props.id && props.label && (!props.showError || !props.errorMessage) && (
          <label
            htmlFor={props.id}
            className='absolute transition-all left-2.5 top-0 text-slate-200 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-slate-300 peer-placeholder-shown:top-8 peer-focus:-top-0 peer-focus:text-slate-200 peer-focus:text-base'
          >
            {props.label}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
