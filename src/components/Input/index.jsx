import { useController } from 'react-hook-form'

function Input({ control, rules, name, ...props }) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  })

  return (
    <div className="flex flex-col">
      <input
        className="w-full border rounded-sm px-2 py-1 lg:py-2 text-black focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400"
        {...field}
        {...props}
      />

      <div className="text-red-500 text-sm italic">{error?.message}</div>
    </div>
  )
}

export default Input
