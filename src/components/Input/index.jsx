import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

function Input({ control, rules, name, isDisabled, ...props }) {
  const { t } = useTranslation()
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
        disabled={isDisabled}
        {...field}
        {...props}
      />

      {!isDisabled && <div className="text-red-500 text-sm italic">{t(error?.message)}</div>}
    </div>
  )
}

export default Input
