import MenuUser from "../../../components/MenuUser";

function UserReview() {
    return (
        <div className="flex flex-row">
            <div className="hidden md:block">
                <MenuUser />
            </div>

            <div>user review</div>
        </div>
    )
}

export default UserReview;