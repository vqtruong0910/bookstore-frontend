import { Suspense } from "react";
import Loading from "../Loading";

function Content({ children }) {
    return (
        <Suspense fallback={<Loading></Loading>}>
            {children}
        </Suspense>
    );
}

export default Content;