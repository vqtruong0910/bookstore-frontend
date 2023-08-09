import { createPortal } from 'react-dom'

function Comment({ open, id, onClick = () => {} }) {
  return createPortal(
    <>{open && id && <div className="bg-red-500 h-screen">Comment {id}</div>}</>,

    document.querySelector('body')
  )
}

export default Comment
