import Context from "./Context";

function Provider({ children }) {
    return (
        <Context.Provider value={null}>
            {children}
        </Context.Provider>
    );
}

export default Provider;