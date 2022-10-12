import { clsx } from 'clsx';

function Button({ style, backGroundColor = "bg-slate-700", hoverBackGroundColor = "hover:bg-slate-800", textColor = "text-slate-50", padding = "p-3", marginY, marginX, children, loading }) {
    return (
        <div className="flex flex-col">
            {
                loading ?
                    <button className={clsx('rounded-lg transition-all text-lg font-bold opacity-60', backGroundColor, textColor, padding, marginY, marginX, style)} disabled>Processing...</button>
                    :
                    <button className={clsx('rounded-lg transition-all text-lg font-bold', backGroundColor, hoverBackGroundColor, textColor, padding, marginY, marginX, style)}>{children}</button>
            }
        </div>
    );
}

export default Button;