import { useController } from 'react-hook-form'

function Radio({ name, control, rules, title, image = false, ...props }) {
  const { field } = useController({
    name,
    control,
  })

  return (
    <div className="w-full p-2 flex items-center">
      <input type="radio" {...field} {...props} checked />
      {image && (
        <img
          src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
          className="mx-2"
          alt="Payment_Image"
        />
      )}
      <label htmlFor={name} className="mx-2 text-gray-600">
        {title}
      </label>
    </div>
  )
}

export default Radio
