function AuthLayout({ children }) {
    return (
        <div className="flex justify-center h-screen bg-slate-50">
            <div className="basis-400 sm:w-400">
                <h1 className="text-center font-lobster text-slate-700 font-bold text-5xl pt-12 pb-5 select-none">Book Store</h1>
                <div className="flex flex-col rounded-lg bg-white shadow-xl border">
                    {children}
                </div>
            </div>
        </div >
    );
}

export default AuthLayout;