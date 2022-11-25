import { useMemo, useState, useEffect, useReducer } from "react";
import Context from "./Context";
import { cartReducer, initializer } from "../reducers/cartReducers";

function Provider({ children }) {
    const defaultUser = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem("user"));
        } catch (error) {
            return false;
        }
    }, []);
    const [user, setUser] = useState(defaultUser);

    const [cart, dispatch] = useReducer(cartReducer, [], initializer);

    useEffect(() => {
        localStorage.setItem("userCart", JSON.stringify(cart));
    }, [cart]);

    return (
        <Context.Provider value={{
            user,
            setUser,
            cart,
            dispatch,
        }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
