import { BiPencil, BiLock } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path";
import Notify from "../../../components/Notify";
import { AiOutlineSmile } from "react-icons/ai";
import React, { useState, useEffect, useCallback, useContext } from "react";
import axios from "axios";
import Context from "../../../store/Context";
import { useForm } from "react-hook-form";
import axiosJWT from "../../../config/axiosJWT";

function PersonInfo() {
    const { user, setUser } = useContext(Context);
    // console.log(user);

    const [notify, setNotify] = useState(false);
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [provinceCode, setProvinceCode] = useState('');
    const [districtCode, setDistrictCode] = useState('');
    const navigate = useNavigate();
    const arrayYear = [];
    const curYear = new Date().getFullYear();

    const { register, handleSubmit, formState: { errors }, clearErrors, setValue, trigger } = useForm({
        mode: "onBlur",
        defaultValues: {
            user_image: "",
            fullName: "",
            email: "",
            gender: "",
            phone: "",
            city: "",
            district: "",
            ward: "",
            address: "",
        },
    });

    const [fileImage, setFileImage] = useState();

    for (let i = curYear - 122; i <= curYear; i++) {
        arrayYear.push(i);
    };

    const onChangeImage = useCallback(async (e) => {
        if (!["image/jpeg", "image/png", "image/gif"].includes(e.target.files[0]?.type)) {
            return (window.alert("Định dạng ảnh là jpg, jpeg, png, gif"));
        }

        const fileImage = e.target.files[0];

        if (fileImage) {
            setValue("user_image", fileImage);
            if (await trigger("user_image")) {
                const fileReader = new FileReader();
                fileReader.readAsDataURL(fileImage)
                fileReader.onloadend = () => {
                    setFileImage(fileReader.result);
                }
                if (window.confirm("Bạn có chắc là muốn thay đổi avatar của mình?")) {
                    try {
                        const response = await axiosJWT.post('users/avatar', { image: fileImage }, { headers: { 'Content-Type': 'multipart/form-data' } });
                        if (response)
                            localStorage.setItem("user", JSON.stringify({ ...user, Anh: response.data.Anh }))
                        setUser({ ...user, Anh: response.data.Anh })
                        return setNotify(true)
                    } catch (error) {
                        console.log(error);

                    }
                }
            } else setFileImage(null);
        }
    }, [fileImage]);

    const onSubmit = (data) => {
        let person_info = {
            fullName: data.fullName,
            email: data.email,
            gender: data.gender,
            phone: data.phone,
            address: `${data.address} ${data.ward}, ${data.district}, ${data.city}`,
        }

        return setNotify(true);
    }

    useEffect(() => {
        const fetchProvinceData = async () => {
            const response = await axios('https://provinces.open-api.vn/api/p');
            setProvince(response.data);
        }
        fetchProvinceData();

    }, []);

    const handleProvince = (event) => {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const getProvinceCode = el.getAttribute('id');
        // console.log(getProvinceCode);
        setProvinceCode(getProvinceCode);

    }

    useEffect(() => {
        const fetchDistrictData = async () => {
            const response = await axios(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
            setDistrict(response.data.districts);
            // console.log(response.data.districts);
        }
        fetchDistrictData();

    }, [provinceCode]);

    const handleDistrict = (event) => {
        const index = event.target.selectedIndex;
        const el = event.target.childNodes[index]
        const getDistrictCode = el.getAttribute('id');
        // console.log(getDistrictCode);
        setDistrictCode(getDistrictCode);
    }

    useEffect(() => {
        const fetchWardData = async () => {
            const response = await axios(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
            setWard(response.data.wards);
        }
        fetchWardData();

    }, [districtCode]);

    return (

        <div className="flex flex-row">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex w-full px-4 md:px-0">
                    <span className="w-full text-lg font-normal mb-5 lg:text-xl">Thông tin tài khoản</span>
                </div>

                <div className="flex w-full flex-wrap lg:flex-nowrap md:mx-0 bg-white shadow-md">
                    <div className="w-full px-4 lg:w-2/3">
                        <div className="w-full flex flex-wrap py-5">
                            <span className="w-full flex text-slate-600 lg:text-lg">Thông tin cá nhân</span>

                            <div className="flex flex-col w-full justify-center">
                                <form>
                                    <div className="flex flex-col items-center py-4 w-full">
                                        <div className="flex relative justify-end items-end">
                                            <div name="user_image" {...register("user_image",
                                                { required: "Vui lòng chọn ảnh đại diện" }
                                            )}
                                                className="flex justify-center items-center">
                                                {user.Anh ?
                                                    <img src={user.Anh} alt="Avatar" className="border-2 rounded-full w-24 h-24 border-blue-200" />
                                                    :
                                                    <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yk93IQ_5_XkAX-s-OzS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOf2W262cuu5MxtuaJUvcfuiNVfxU3F7xPh1JhNjpNeg&oe=63A194B8"
                                                        alt="Avatar" className="border-1 rounded-full w-24 h-24" />
                                                }

                                            </div>

                                            <div className="flex flex-col absolute w-6 h-6 items-center justify-center rounded-full border bg-gray-600">
                                                <input type="file" accept=".gif, .jpg, .png, .jpeg"
                                                    onChange={(event) => onChangeImage(event)}
                                                    className="hidden" id="file"
                                                />
                                                <label htmlFor="file">
                                                    <BiPencil className="w-4 h-4 text-white cursor-pointer" />
                                                </label>
                                            </div>
                                        </div>
                                        {errors.user_image &&
                                            <div className="text-xs text-red-500 md:text-sm">{errors.user_image.message}</div>
                                        }
                                    </div>
                                </form>


                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="flex w-full py-2">
                                        <div className="w-1/3 lg:w-4/12 items-center flex">
                                            <span className="flex text-sm lg:text-base">Họ & Tên</span>
                                        </div>

                                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                                            <input name="fullName" type="text" value={user.HoTen} {...register("fullName", { required: "Họ tên không được để trống" })} className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" placeholder="VD: Nguyễn Văn A" />
                                            {errors.fullName &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.fullName.message}</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="flex w-full py-2">
                                        <div className="w-1/3 lg:w-4/12 items-center flex">
                                            <span className="flex text-sm lg:text-base">Email</span>
                                        </div>

                                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                                            <input name="email" type="email" value={user.HoTen} {...register("email",
                                                {
                                                    required: "Email không được để trống",
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Vui lòng nhập đúng định dạng email",
                                                    },
                                                })}
                                                className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" placeholder="VD: nguyenvana@gmail.com" />
                                            {errors.email &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.email.message}</div>
                                            }
                                        </div>

                                    </div>

                                    <div className="flex w-full py-2">
                                        <div className="w-1/3 lg:w-4/12 items-center flex">
                                            <span className="flex text-sm lg:text-base">Giới tính</span>
                                        </div>

                                        <div className="flex flex-col w-2/3 lg:w-8/12 py-2 md:py-3">
                                            <div className="flex w-full">
                                                <div className="w-full">
                                                    <input name="gender" {...register("gender", { required: "Vui lòng chọn giới tính" })} type="radio" value="Male" />
                                                    <label htmlFor="Male" className="mx-2">Nam</label>
                                                </div>

                                                <div className="w-full">
                                                    <input name="gender" {...register("gender", { required: "Vui lòng chọn giới tính" })} type="radio" value="Female" />
                                                    <label htmlFor="Female" className="mx-2">Nữ</label>
                                                </div>
                                            </div>

                                            {errors.gender &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.gender.message}</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="flex w-full py-2">
                                        <div className="w-1/3 lg:w-4/12 items-center flex">
                                            <span className="flex text-sm lg:text-base">Số điện thoại</span>
                                        </div>

                                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                                            <input name="phone" {...register("phone", {
                                                required: "Số điện thoại không được để trống",
                                                pattern:
                                                {
                                                    value: /[0]{1}[0-9]{9}/,
                                                    message: "Vui lòng chỉ nhập đủ 10 số"
                                                },
                                            }
                                            )} type="tel" placeholder="VD: 0xxxxxxxxx"
                                                className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" />
                                            {errors.phone &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.phone.message}</div>
                                            }
                                        </div>

                                    </div>

                                    <div className="w-full flex py-2">
                                        <div className="w-1/3 lg:w-4/12 items-center flex">
                                            <span className="flex text-sm lg:text-base">Số nhà</span>
                                        </div>

                                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                                            <input name="address" type="text" {...register("address",
                                                {
                                                    required: "Số nhà không được để trống",
                                                })} className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" placeholder="VD: 273 An Dương Vương" />
                                            {errors.address &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.address.message}</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap lg:flex-nowrap w-full justify-between">
                                        <div className="flex flex-col py-2 lg:mr-10 w-full">
                                            <select name="city" {...register("city", { required: "Vui lòng chọn tỉnh thành" })}
                                                onChange={(event) => handleProvince(event)} onClick={() => clearErrors("city")}
                                                className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                                <option value="" disabled>Tỉnh / Thành phố</option>
                                                {province && province !== undefined ?
                                                    province.map(item => (
                                                        <option key={item.code} value={item.name} id={item.code} defaultValue={item.name}>{item.name}</option>
                                                    ))
                                                    :
                                                    <></>
                                                }
                                            </select>
                                            {errors.city &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.city.message}</div>
                                            }
                                        </div>

                                        <div className="flex flex-col py-2 w-full">
                                            <select name="district" {...register("district", { required: "Vui lòng chọn quận huyện" })}
                                                onChange={(e) => handleDistrict(e)} onClick={() => clearErrors("district")}
                                                className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                                <option value="" disabled>Quận / huyện</option>
                                                {district && district !== undefined ?
                                                    district.map(item => (
                                                        <option key={item.code} value={item.name} id={item.code}>{item.name}</option>
                                                    ))
                                                    :
                                                    <></>
                                                }
                                            </select>
                                            {errors.district &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.district.message}</div>
                                            }

                                        </div>

                                        <div className="flex flex-col py-2 lg:ml-10 w-full">
                                            <select name="ward" {...register("ward", { required: "Vui lòng chọn phường xã" })} onClick={() => clearErrors("ward")}
                                                className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                                <option value="" disabled>Phường / xã</option>
                                                {ward && ward !== undefined ?
                                                    ward.map(item => (
                                                        <option key={item.code} value={item.name}>{item.name}</option>
                                                    ))
                                                    :
                                                    <></>
                                                }
                                            </select>
                                            {errors.ward &&
                                                <div className="text-xs text-red-500 md:text-sm">{errors.ward.message}</div>
                                            }
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div className="w-full flex justify-center py-5 cursor-pointer">
                            <button type="submit" className="w-40 h-10 flex text-white items-center justify-center bg-slate-700 hover:bg-slate-500 transition rounded-sm">
                                Lưu thay đổi
                            </button>
                        </div>
                    </div>

                    {notify ?
                        <Notify close="true" message="Chúc mừng bạn lưu thay đổi thành công" icon={<AiOutlineSmile className="w-5 h-5 md:w-7 md:h-7 text-slate-700" />} textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} />
                        :
                        <></>
                    }

                    <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col px-4 lg:border-l lg:my-5 border-gray-300 py-5 lg:py-0">
                        <div className="w-full flex flex-wrap lg:flex-col border-t lg:border-t-0">
                            <span className="w-full flex text-slate-600  border-gray-300 pt-5 lg:pt-0 lg:text-lg">Bảo mật</span>
                            <div className="w-full flex lg:flex-col">
                                <div className="w-full flex py-2">
                                    <div className="w-full flex">
                                        <div className="flex items-center">
                                            <BiLock className="w-6 h-6" />
                                        </div>

                                        <div className="w-full text-sm whitespace-nowrap mx-1 flex items-center mt-1 lg:text-base">Đổi mật khẩu</div>
                                    </div>

                                    <div onClick={() => navigate(PATH.profile.user_change_password)} className="w-full flex justify-end cursor-pointer">
                                        <div className="border-2 w-20 h-8 flex justify-center rounded-md bg-slate-700 hover:bg-slate-500 transition">
                                            <span className="text-white flex items-center">Cập nhật</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default PersonInfo;