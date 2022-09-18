import clsx from 'clsx';
import loading from './style.module.scss'

function Loading({ style }) {
    return (
        <div className={clsx("flex w-full h-full justify-center items-center", style)}>
            <div className={loading["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;