import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="py-20">
            <h1 className="text-center text-6xl font-bold">404</h1>
            <h2 className="text-center text-4xl">Not Found</h2>
            <Link to="/">Quay lai trang chu</Link>
        </div>
    );
}

export default NotFound;