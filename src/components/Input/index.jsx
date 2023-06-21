import { useController } from 'react-hook-form'

function Input({ control, rules, children, ...props }) {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: '',
    rules,
  })

  return (
    <input
      className="w-full border rounded-sm px-2 py-1 lg:py-2 text-black focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400"
      {...field}
      {...props}
      onChange={(e) => field.onChange(e.target.value)}
    />
  )
}

export default Input
