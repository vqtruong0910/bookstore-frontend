import { BiPencil } from 'react-icons/bi'

function InputImage({ onChange = () => {} }) {
  return (
    <div className="flex flex-col absolute w-6 h-6 items-center justify-center rounded-full border bg-gray-600">
      <input
        type="file"
        accept=".gif, .jpg, .png, .jpeg"
        onChange={onChange}
        className="hidden"
        id="file"
      />
      <label htmlFor="file">
        <BiPencil className="w-4 h-4 text-white cursor-pointer" />
      </label>
    </div>
  )
}

export default InputImage
