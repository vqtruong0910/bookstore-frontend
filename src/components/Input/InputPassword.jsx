import { useState } from 'react'
import { useController } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'

function InputPassword({ children, control, rules, name, ...props }) {
  const [show, setShow] = useState(false)
  const {
    field,
    fieldState: { error },
  } = useController({ name, control, rules })

  return (
    <div className="w-full flex flex-wrap mb-3 gap-1">
      <div className="text-base">{children}</div>

      <div className="flex flex-col w-full items-center justify-end">
        <div className="flex relative w-full items-center">
          <input
            type={show ? 'text' : 'password'}
            className="w-full flex border rounded-sm pl-2 pr-10 py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm relative"
            {...field}
            {...props}
          />
          <div
            className="absolute flex px-2 right-0 top-1/2 -translate-y-1/2"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <FiEyeOff className="w-5 h-5 text-gray-500" />
            ) : (
              <FiEye className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        <div className="text-red-500 text-sm italic flex w-full justify-start">
          {error?.message}
        </div>
      </div>
    </div>
  )
}

export default InputPassword
