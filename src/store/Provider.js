import jwtDecode from "jwt-decode";
import { useMemo, useState } from "react";
import Context from "./Context";

function Provider({ children }) {
    const defaultUser = useMemo(() => {
        try {
            return jwtDecode(localStorage.getItem("token"));
        } catch (error) {
            return false;
        }
    }, []);
    const [user, setUser] = useState(defaultUser);

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
}

export default Provider;
