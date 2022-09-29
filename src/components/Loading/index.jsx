import clsx from 'clsx';
import loading from './style.module.scss'

function Loading({ style, center = false }) {
    return (
        <div className={clsx(center && "h-screen", "flex w-full justify-center items-center bg-transparent", style)}>
            <div className={loading["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;