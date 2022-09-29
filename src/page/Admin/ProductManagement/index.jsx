import { BsCardImage } from 'react-icons/bs';

function ProductManage() {
    return (
        <>
            <div className="flex space-x-2">
                <h2 className="text-xl font-semibold">Sản phẩm</h2>
                <button className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors">Thêm sản phẩm</button>
            </div>

            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm" value="Tìm" />
                    </div>
                    <div className="flex ml-auto space-x-3">
                        <select className="rounded-sm border">
                            <option value="">Chọn danh mục</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select className="rounded-sm border">
                            <option value="">Hiển thị toàn bộ sản phẩm</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <select className="rounded-sm border">
                            <option value="">Tất cả các ngày</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>

                <div className="flex">
                    <div className="ml-auto">Next page</div>
                </div>
            </div>


            <table className="border-collapse border rounded-sm w-full bg-white md:table-fixed">
                <thead>
                    <tr>
                        <th className="border border-slate-200"><input type="checkbox" /></th>
                        <th className="border border-slate-200"><BsCardImage /></th>
                        <th className="border border-slate-200">Tên</th>
                        <th className="border border-slate-200">Kho</th>
                        <th className="border border-slate-200">Giá</th>
                        <th className="border border-slate-200">Danh mục</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-slate-100">
                        <td className="border border-slate-200"><input type="checkbox" /></td>
                        <td className="border border-slate-200">Malcolm Lockyer</td>
                        <td className="border border-slate-200">1961</td>
                        <td className="border border-slate-200">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="border border-slate-200">Malcolm Lockyer</td>
                        <td className="border border-slate-200">1961</td>
                    </tr>
                    <tr className="odd:bg-slate-100">
                        <td className="border border-slate-200"><input type="checkbox" /></td>
                        <td className="border border-slate-200">The Eagles</td>
                        <td className="border border-slate-200">1972</td>
                        <td className="border border-slate-200">Witchy Woman</td>
                        <td className="border border-slate-200">The Eagles</td>
                        <td className="border border-slate-200">1972</td>
                    </tr>
                    <tr className="odd:bg-slate-100">
                        <td className="border border-slate-200"><input type="checkbox" /></td>
                        <td className="border border-slate-200">Earth, Wind, and Fire</td>
                        <td className="border border-slate-200">1975</td>
                        <td className="border border-slate-200">Shining Star</td>
                        <td className="border border-slate-200">Earth, Wind, and Fire</td>
                        <td className="border border-slate-200">1975</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default ProductManage;