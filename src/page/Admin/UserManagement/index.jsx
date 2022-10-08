import { BsCardImage } from "react-icons/bs";

function UserManagement() {
    return (
        <>
            <div className="flex space-x-2">
                <h2 className="text-xl font-semibold">Tài khoản người dùng</h2>
            </div>

            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Tìm" />
                    </div>
                </div>

                <div className="flex justify-end space-x-2 py-1">
                    <div className='px-2 border rounded-sm cursor-pointer'>2.706 mục</div>
                    <div className='px-2 border rounded-sm cursor-pointer'>&#171;</div>
                    <div className='px-2 border rounded-sm cursor-pointer'>&#60;</div>
                    <div><input className='px-2 border rounded-sm cursor-pointer w-14 text-center' defaultValue="1" /></div>
                    <div className='px-2 border rounded-sm cursor-pointer'>&#62;</div>
                    <div className='px-2 border rounded-sm cursor-pointer'>&#187;</div>
                    <div className="px-2 border rounded-sm cursor-pointer">Next page</div>
                </div>
            </div>


            <table className="table-auto border-collapse border rounded-sm w-full bg-white md:table-fixed">
                <thead>
                    <tr className="border">
                        <th className="p-2 w-8"><input type="checkbox" /></th>
                        <th className="p-2 hidden md:table-cell"><BsCardImage className='mx-auto w-full' /></th>
                        <th className="p-2 text-left">Tên</th>
                        <th className="p-2 text-left">Kho</th>
                        <th className="p-2 text-left">Giá</th>
                        <th className="p-2 text-left">Danh mục</th>
                        <th className="p-2 text-left">Danh mục</th>
                        <th className="p-2 text-left">Danh mục</th>
                    </tr>
                </thead>
                <tbody>
                    {Array(5).fill(0).map((item, index) => (
                        <tr key={index} className="odd:bg-slate-100 border">
                            <td className="p-2"><input className='mx-auto w-full' type="checkbox" /></td>
                            <td className="p-2 hidden md:table-cell"><img className='w-24 h-16 object-fill mx-auto' src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg" alt="book" /></td>
                            <td className="p-2">1962</td>
                            <td className="p-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="p-2">Malcolm Lockyer</td>
                            <td className="p-2">1961</td>
                            <td className="p-2">1961</td>
                            <td className="p-2">1961</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserManagement;