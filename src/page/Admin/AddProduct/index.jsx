import { useForm } from "react-hook-form";
import Textfield from "../../../components/Textfield";
import DropFile from "../../../components/DropFile";
import { VALIDATE } from "../../../constants/validate";
import clsx from "clsx";
import { useCallback } from "react";
import { useState } from "react";
import style from "./style.module.scss";
import PreviewImage from "../../../components/PreviewImage";

function AddProduct() {
    const { register, control, formState: { errors }, handleSubmit, setValue, trigger } = useForm({
        mode: "onBlur",
        defaultValues: {
            nameproduct: "",
            NoiDung: "",
            image: "",
        }
    });
    const [fileImage, setFileImage] = useState();

    const onChangeImage = useCallback(async (e) => {
        const fileImage = e.target.files[0];
        if (fileImage) {
            setValue("image", fileImage);
            if (await trigger("image")) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(fileImage)
                fileReader.onloadend = () => {
                    setFileImage(fileReader.result);
                }
            } else setFileImage(null);
        }
    }, []);
    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
                <h2 className="text-xl font-semibold">Thêm Sản phẩm</h2>
                <button className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">Xác nhận</button>
            </div>
            <div className="grid sm:grid-cols-5 grid-cols-1 py-2 gap-4">
                <div className="col-span-1 sm:col-span-3">
                    <span>Tên sản phẩm</span>
                    <Textfield rounded="rounded-sm" name="nameproduct" control={control} rules={VALIDATE.name} placeholder="Truyện cười Việt Nam..." />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <span>Danh mục</span>
                    <select name="" className="p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block w-full">
                        <option value="">--Select--</option>
                        <option value="">Truyen ma</option>
                        <option value="">--Select--</option>
                    </select>
                </div>
                <div className="col-span-1 sm:col-span-3 row-span-3">
                    <span>Nội dung</span>
                    <textarea {...register("NoiDung", VALIDATE.content)} className={clsx(errors.NoiDung && "border-red-600", style["hide-scrollbar"], "outline-none p-4 w-full border resize-none overflow-scroll")} rows="6" placeholder="Mô tả sản phẩm..."></textarea>
                    {errors.NoiDung && <span className="px-2 italic text-sm text-red-500">{errors.NoiDung.message}*</span>}
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <span>Nhà xuất bản</span>
                    <select name="" className="p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block w-full">
                        <option value="">--Select--</option>
                    </select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <span>Đơn vị tính</span>
                    <Textfield rounded="rounded-sm" name="donvi" control={control} rules={VALIDATE.unit} placeholder="VD: Cuốn" />
                </div>
                <div className="col-span-1 sm:col-span-3">
                    <span>Giá bán</span>
                    <Textfield type="number" rounded="rounded-sm" name="giaban" control={control} rules={VALIDATE.price} placeholder="120000" />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <span>Số lượng sản phẩm</span>
                    <Textfield type="number" rounded="rounded-sm" name="soluong" control={control} rules={VALIDATE.count} placeholder="120" />
                </div>
                <div className="col-span-1 sm:col-span-3 ">
                    <span>Hình ảnh</span>
                    <DropFile name="image" control={control} rules={VALIDATE.image} onChangeImage={onChangeImage} />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <span>Xem Trước</span>
                    <PreviewImage fileImage={fileImage} />
                </div>
            </div>
        </form>
    );
}

export default AddProduct;
