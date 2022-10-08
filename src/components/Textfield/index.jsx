import clsx from "clsx";
import { useController } from "react-hook-form";

function Textfield({
    marginX,
    marginY,
    marginT,
    marginB,
    rounded = "rounded-lg",
    style,
    type,
    placeholder = "Hãy viết gì đó...",
    control,
    name,
    rules
}) {
    const { field, fieldState } = useController({ control, name, rules });
    return (
        <div className={clsx("flex flex-col", marginY, marginX, marginT, marginB)}>
            <input type={type} className={clsx(fieldState.error && "border-red-600", "p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block", rounded, style)} placeholder={placeholder} {...field} />
            {fieldState.error && <span className="px-2 italic text-sm text-red-500">{fieldState.error.message}*</span>}
        </div>
    );
}

export default Textfield;