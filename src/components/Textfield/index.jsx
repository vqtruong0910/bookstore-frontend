import clsx from 'clsx'
import { useController } from 'react-hook-form'
import custom from './style.module.scss'

function Textfield({
  marginX,
  marginY,
  marginT,
  marginB,
  rounded = 'rounded-lg',
  style,
  type,
  placeholder = 'Hãy viết gì đó...',
  disabled,
  control,
  name,
  rules,
}) {
  const { field, fieldState } = useController({ control, name, rules })
  return (
    <div className={clsx('flex flex-col', marginY, marginX, marginT, marginB)}>
      <input
        type={type}
        className={clsx(
          fieldState.error && 'border-red-600',
          custom['none-spin'],
          'p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block',
          rounded,
          style
        )}
        placeholder={placeholder}
        {...field}
        disabled={disabled && true}
      />
      {fieldState.error && (
        <span className="px-2 italic text-sm text-red-500">{fieldState.error.message}*</span>
      )}
    </div>
  )
}

export default Textfield
