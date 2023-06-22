import { useController } from 'react-hook-form'

function Select({ control, rules, name, state, title, onClick = () => {}, ...props }) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  })

  return (
    <div className="flex flex-col p-2 w-full">
      <select
        onClick={onClick}
        className={`border rounded-sm w-full px-2 py-1 lg:py-2   ${
          error ? 'border-red-300' : 'border-black/20'
        } focus:outline-none focus:ring-sky-200 focus:ring-1 text-base`}
        {...field}
        {...props}
      >
        <option value="" disabled>
          {title}
        </option>
        {state && state !== undefined ? (
          state.map((item) => (
            <option key={item.code} value={item.name} id={item.code}>
              {item.name}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
    </div>
  )
}

export default Select
