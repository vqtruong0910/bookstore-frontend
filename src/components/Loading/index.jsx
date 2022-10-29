import clsx from 'clsx';
import loading from './style.module.scss'

function Loading({ style, center = false }) {
    return (
        <div className={clsx(center && "h-screen", "flex w-full justify-center items-center", style)}>
            <div className={loading["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}


Loading.transparent = ({ isLoading }) => {
    return (
        <div className={clsx("flex w-full h-screen justify-center items-center z-50 fixed inset-0 bg-slate-200 transition-opacity opacity-70")}>
            <div className={loading["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
export default Loading;