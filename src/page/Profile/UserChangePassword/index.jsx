import React from "react";
import MenuUser from "../../../components/MenuUser";
function UserChangePassword() {
    return (
        <div className="flex flex-row">
            <div className="hidden md:block">
                <MenuUser />
            </div>

            <div>change password</div>
        </div>
    )
}

export default UserChangePassword;