import clsx from "clsx";
// Validate form = react hook form
// Truyen control vao va su dung useController()
function Textfield({
    marginX,
    marginY,
    marginT,
    marginB,
    style,
    type,
    placeholder = "Hãy viết gì đó..."
}) {
    return (
        <div className={clsx("flex flex-col", marginY, marginX, marginT, marginB)}>
            <input type={type} className={clsx("p-3 invalid:border-red-800  border rounded-lg transition-colors focus:outline-none focus:placeholder-slate-300 block", style)} placeholder={placeholder} />
            {/* <span className="px-2 italic text-xs text-red-800">Xin vui lòng nhập vào*</span> */}
        </div>
    );
}

export default Textfield;