import { useNavigate } from 'react-router-dom'

function Image({ item, className = '' }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/books/${item.IDSanPham}`)}
      className="flex w-full justify-center mb-4 cursor-pointer"
    >
      <img
        className={`w-full object-contain max-h-[250px] ${className}`}
        src={item.HinhAnh}
        alt="book"
      />
    </div>
  )
}

export default Image
