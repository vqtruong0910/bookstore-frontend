import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

function Textarea({ control, rules, name, ...props }) {
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
      <div className="w-full flex my-2">
        <textarea
          name="review"
          className="w-full border rounded-sm px-2 py-1 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
          {...field}
          {...props}
        />
      </div>
      <div className="text-red-500 text-sm italic">{t(error?.message)}</div>
    </div>
  )
}

export default Textarea
