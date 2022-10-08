import { useForm } from "react-hook-form";
import Textfield from "../../../components/Textfield";

function AddProduct() {
    const { control } = useForm({ mode: "onBlur" })
    return (
        <>
            <h2 className="text-xl font-semibold">Thêm Sản phẩm</h2>
            <div className="grid grid-cols-4 py-2 gap-4">
                <div className="col-span-3">
                    <Textfield rounded="rounded-sm" name="nameproduct" control={control} rules={{ required: "Không được bỏ trống tên sản phẩm" }} placeholder="Tên sản phẩm" />
                </div>
                <div></div>
            </div>
        </>
    );
}

export default AddProduct;