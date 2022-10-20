import React from "react";
import MenuUser from "../../../components/MenuUser";
function UserPaymentInformation() {
    return (
        <div className="flex flex-row">
            <div className="hidden md:block">
                <MenuUser />
            </div>

            <div>user payment information</div>
        </div>
    )
}

export default UserPaymentInformation;