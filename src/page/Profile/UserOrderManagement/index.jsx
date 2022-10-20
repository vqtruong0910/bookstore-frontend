import React from "react";
import MenuUser from "../../../components/MenuUser";
function UserOrderManagement() {
    return (
        <div className="flex flex-row">
            <div className="hidden md:block">
                <MenuUser />
            </div>

            <div>user order management</div>
        </div>
    )
}

export default UserOrderManagement;