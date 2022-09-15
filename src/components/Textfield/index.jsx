import clsx from "clsx";

function Textfield({ marginX, marginY, marginT, marginB, style, type, placeholder = "Hãy viết gì đó...", children }) {
    return (
        <input type={type} className={clsx("p-3 border rounded-lg transition-colors focus:outline-none focus:placeholder-slate-300 block", marginY, marginX, marginT, marginB, style)} placeholder={placeholder}>{children}</input>
    );
}

export default Textfield;