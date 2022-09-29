import { Link } from "react-router-dom";
import Slider from "../../components/Slider";

function Main() {
    return (
        <>
            <Slider />
            <div className="flex w-full">
                <div className="flex w-full text-[20px]">Sách mới nhất</div>
                <Link to="/admin">Admin(Test)</Link>
            </div>
        </>
    );
}

export default Main;