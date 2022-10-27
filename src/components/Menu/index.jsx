;

function Menu() {
    const categoryArr = [
        {id: 1, name: "Tiểu thuyết"},
        {id: 2, name: "Kinh tế"},
        {id: 3, name: "Truyện ngắn - tản văn"},
        {id: 4, name: "Sách thiếu nhi"},
        {id: 5, name: "Tâm lí - Kĩ năng sống"},
        {id: 6, name: "Giáo khoa - Tham khảo"},
        {id: 7, name: "Tiểu sử - Hồi ký"},
        {id: 8, name: "Sách học ngoại ngữ"}
    ]

    return (
        <div className="flex w-full">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex w-full px-4">
                    <span className="w-full text-lg font-normal lg:text-xl">Danh mục</span>
                </div>
                <div className="flex w-full px-4 mt-5">
                    <div className="md:hidden w-full flex">
                        <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/10 focus:outline-none focus:ring-black/40 focus:ring-1 text-sm font-medium">
                            <option value="tieuthuyet">Tiểu thuyết</option>
                            <option value="kinhte">Kinh tế</option>
                            <option value="truyenngan_tanvan">Truyện ngắn - tản văn</option>
                            <option value="sachthieunhi">Sách thiếu nhi</option>
                            <option value="tamli_kinangsong">Tâm lí - Kĩ năng sống</option>
                            <option value="giaokhoa_thamkhao">Giáo khoa - Tham khảo</option>
                            <option value="tieusu_hoiky">Tiểu sử - Hồi ký</option>
                            <option value="sachhocngoaingu">Sách học ngoại ngữ</option>
                        </select>
                    </div>

                    <div className="md:hidden w-full flex justify-end">
                        <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/10 focus:outline-none focus:ring-black/40 focus:ring-1 text-sm font-medium">
                            <option value="noibat">Nổi bật</option>
                            <option value="banchay">Bán chạy</option>
                            <option value="phobien">Phổ biến</option>
                            <option value="giatangdan">Giá tăng dần</option>
                            <option value="giagiamdan">Giá giảm dần</option>
                        </select>
                    </div>
                </div>

                <div className="hidden md:bg-white md:flex md:flex-col md:items-center">
                    <div className="px-4 py-1 border-black/20 border text-base text-gray-500 bg-gray-200">
                        Danh mục sản phẩm
                    </div>
                    <div className="flex flex-col">
                        <div>Tiểu thuyết</div>
                        <div>Kinh tế</div>
                        <div>Truyện ngắn</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;