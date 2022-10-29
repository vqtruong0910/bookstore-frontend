import { IoAddSharp } from "react-icons/io5";
import { IoMdRemove } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { DetailBookData } from "./DetailBookData";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import style from "./DetailBook.module.scss";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import { useState } from "react";
import Notify from "../../components/Notify";

function DetailBook() {

    const navigate = useNavigate();
    const [showImage, setShowImage] = useState(1);
    const handleImage = (e) => {
        setShowImage(e);
    }
    const [showContent, setShowContent] = useState(4);
    const handleContent = (e) => {
        setShowContent(e);
    }

    function NextArrow({ onClick }) {
        return (
            <BsFillArrowRightCircleFill className="absolute right-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer" onClick={onClick} />
        );
    }

    function PrevArrow({ onClick }) {
        return (
            <BsFillArrowLeftCircleFill className="absolute left-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer" onClick={onClick} />
        );
    }

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 1,
        infinite: true,
        arrows: true,
        lazyLoad: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <div className="w-full flex py-6 flex-wrap">
            <div className="w-full bg-white rounded-sm flex shadow-md">
                <div className="w-full my-3 flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-wrap w-full lg:w-4/12">
                        <div className="w-full flex justify-center">
                            {showImage === 1 &&
                                <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246933497.jpg" className="w-64 h-64 lg:w-96 lg:h-96" alt="Book_Image" />
                            }
                            {showImage === 2 &&
                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/d0/86/b1/0c0368a7b771be7efa0c691d26f148b3.jpg.webp" className="w-64 h-64 lg:w-96 lg:h-96" alt="Book_Image" />
                            }
                            {showImage === 3 &&
                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/e4/34/94/e249548d6c3d78d1306659f7109c37a7.jpg.webp" className="w-64 h-64 lg:w-96 lg:h-96" alt="Book_Image" />
                            }

                        </div>

                        <div className="flex justify-center w-full py-4">
                            <div onClick={() => handleImage(1)} className={showImage === 1 ? "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm  ring-1 ring-blue-600 mx-2 cursor-pointer" : "flex cursor-pointer items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm mx-2"}>
                                <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246933497.jpg" className="w-full" alt="Book_Image" />
                            </div>
                            <div onClick={() => handleImage(2)} className={showImage === 2 ? "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm  ring-1 ring-blue-600 mx-2 cursor-pointer" : "flex cursor-pointer items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm mx-2"}>
                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/d0/86/b1/0c0368a7b771be7efa0c691d26f148b3.jpg.webp" className="w-full" alt="Book_Image" />
                            </div>
                            <div onClick={() => handleImage(3)} className={showImage === 3 ? "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm  ring-1 ring-blue-600 mx-2 cursor-pointer" : "flex cursor-pointer items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-sm mx-2"}>
                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/e4/34/94/e249548d6c3d78d1306659f7109c37a7.jpg.webp" className="w-full" alt="Book_Image" />
                            </div>
                        </div>
                    </div>


                    <div className="w-full flex-col flex lg:w-8/12">
                        <div className="w-full flex-wrap py-2 mx-4">
                            <span className="text-base lg:text-2xl lg:font-medium font-normal text-gray-700">Sách - Xé vài trang thanh xuân, đổi lấy một bản thân nỗ lực</span>
                        </div>

                        <div className="hidden lg:flex lg:flex-wrap">
                            <div className="flex flex-col mx-4">
                                <span className="py-0.5">Tác giả</span>
                                <span className="py-0.5">Nhà xuất bản</span>
                                <span className="py-0.5">Số trang</span>
                                <span className="py-0.5">Danh mục</span>
                            </div>
                            <div className="flex flex-col mx-4">
                                <span className="py-0.5 font-semibold">Văn Cát Nhi</span>
                                <span className="py-0.5 font-semibold">NXB Hồng Đức</span>
                                <span className="py-0.5 font-semibold">232</span>
                                <span className="py-0.5 font-semibold">Tâm lí - Kĩ năng sống</span>
                            </div>
                        </div>

                        <div className="w-full flex flex-row items-center mx-4 lg:py-5">
                            <span className="text-xl lg:text-3xl text-red-500 font-semibold">83.000đ</span>
                            <span className="text-lg lg:text-xl line-through text-neutral-400 mx-4">96.000đ</span>
                            <div className="w-14 lg:w-16 lg:py-0.5 flex justify-center border rounded-md bg-orange-400">
                                <span className="text-white font-semibold mx-0.5 lg:text-lg">- 13%</span>
                            </div>
                        </div>

                        <div className="lg:w-7/12 flex flex-row items-center mt-4 mx-4">
                            <div className="rounded-sm cursor-pointer lg:w-1/2">
                                <div className="py-1 lg:py-3 px-1 flex flex-row lg:justify-center bg-red-500 rounded-sm hover:bg-red-400 transition">
                                    <BsCart3 className="w-5 h-5 lg:w-7 lg:h-7 text-white font-semibold" />
                                    <span className="mx-1 text-white font-medium text-sm lg:text-lg">Thêm giỏ hàng</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-end lg:w-1/2 lg:justify-center">
                                <span className="text-gray-500 text-sm md:text-base font-semibold mx-3">Số lượng</span>
                                <div className="flex flex-row items-center w-24 rounded-sm border border-slate-300 justify-between">
                                    <div className="w-full border-r-2 flex justify-center cursor-pointer">
                                        <IoMdRemove className="w-5 h-7 text-gray-300" />
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <span className="text-gray-800 font-semibold">1</span>
                                    </div>

                                    <div className="w-full border-l-2 flex justify-center cursor-pointer">
                                        <IoAddSharp className="w-5 h-7 text-gray-500" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex flex-wrap w-full bg-white my-4 shadow-md">
                <div className="flex flex-row cursor-pointer">
                    <div onClick={() => handleContent(4)} className={showContent === 4 ? "px-4 py-1 text-sm md:text-lg font-semibold bg-gray-400 text-slate-800" : "px-4 py-1 text-sm md:text-lg font-semibold"}>Mô tả sản phẩm</div>
                    <div onClick={() => handleContent(5)} className={showContent === 5 ? "px-4 py-1 text-sm md:text-lg font-semibold bg-gray-400 text-slate-800" : "px-4 py-1 text-sm md:text-lg font-semibold"}>Thông tin chi tiết</div>
                </div>

                <div className="flex flex-wrap w-full">
                    {showContent === 4 &&
                        <div className="mx-4">
                            <p className="w-full text-sm md:text-base my-2">
                                "Cuộc đời con người giống như một cuốn sách!
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                Ai cũng có một vài trang muốn xé đi trong đời"
                            </p>
                            <p className="w-full text-sm md:text-base my-2" >
                                Bạn có biết làm sao để cảm nhận rằng mình đang trưởng thành hay không? Đó chính là hai khoảnh khắc khi nhắm mắt và mở mắt mỗi ngày của chúng ta đấy. Với từng ngày trôi qua trong cuộc đời mà chúng ta đang sống, không chỉ cần phải cố gắng bước về phía trước, mà còn phải học được cách tìm kiếm niềm hạnh phúc cho chính mình. Tuổi trẻ này chính là nguồn vốn tốt nhất của bạn. Cho dù chỉ còn một tia hy vọng, bạn cũng phải nỗ lực để thay đổi bởi trên thế giới này, ngoại trừ chính bản thân mình ra, không một ai có thể giúp bạn. Có người cười nhạo bạn, có người gây trở ngại cho cuộc sống của bạn, nhưng tất cả đều không hề quan trọng bằng việc bạn có đủ dũng khí, đủ nỗ lực để vươn tới ngày mai rạng rỡ. Bởi vậy cô gái à, nếu bạn chân thành và nỗ lực, ắt sẽ có vì sao sáng soi rọi con đường phía trước cho mình.
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                Những câu chuyện có thật ngoài đời thực cùng với giọng văn sắc sảo nhưng cũng không kém phần hài hước và ấm áp của Văn Cát Nhi, cuốn sách Xé Vài Trang Thanh Xuân, Đổi Lấy Một Bản Thân Nỗ Lực sẽ giúp những người trẻ đang hoang mang, mơ hồ nhìn ra chân lý của cuộc sống mà vẫn tin yêu cuộc đời, đồng thời truyền cảm hứng để người trẻ trưởng thành hơn thông qua thông điệp: “Dù cuộc đời có cả ngàn lý do khiến bạn khóc thì bạn cũng phải viện ra cả vạn lý do để cười.”
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                Những trích dẫn hay trong cuốn sách Xé Vài Trang Thanh Xuân, Đổi Lấy Một Bản Thân Nỗ Lực
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Có rất nhiều người thích hoài niệm những chuyện thanh xuân xưa cũ của mình, lúc đó, lòng ta chưa từng trống trải, chứ đâu như bây giờ, khi không lại cứ cảm thấy năm tháng vô vị chẳng có gì hay ho cả. Khi xưa, chúng ta chẳng bao giờ thích mặc chiếc áo đồng phục trường xấu xí, người mà ta thích lại ngồi ở dãy bên kia lớp học, xa ơi là xa. Đến khi trưởng thành rồi mới nhận ra, tấm áo khi xưa rực rỡ, chói mắt nhường nào, chỉ cần được nhìn thấy người mình thích thì có xa cách bao nhiêu cũng sẽ như gần ngay bên cạnh vậy.
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Có người nói rằng: “Tôi chẳng muốn là kẻ xuất sắc hơn người làm gì, mệt mỏi lắm. Tôi chỉ muốn sống những ngày tháng nhàn nhã, bình thản, ngày ngày chơi với mèo, trồng cây cỏ.” Thử hỏi quanh bạn xem, có ai mà lại không muốn được như thế? Những người ngày ngày chen chúc trên quãng đường đi làm, có lẽ quá nửa đương mong mỏi được tua nhanh đến quãng đời nghỉ hưu nhàn nhã. Thế nhưng, chi phí để cung ứng cho quãng đời thảnh thơi này từ đâu mà ra cơ chứ? Bởi vậy, đương cái tuổi cần phải cố gắng phấn đấu thì đừng lựa chọn hưởng thụ, an nhàn.
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Tôi chẳng thích phải bước trên con đường mờ tối âm u, muốn có ánh sáng chiếu rọi thì hãy cứ tự mình tỏa sáng. Đôi khi, tính khí tôi sẽ hơi thất thường, lời an ủi hiệu quả nhất mà tôi từng nghe là: “Cậu chỉ mới xuống dốc được hôm nay thôi, có người còn tụt dốc cả đời kia kìa!” Tuổi càng lớn thì càng từng trải, cũng là phải đối diện với đủ loại khủng hoảng tâm lý khác nhau. Thế nhưng, còn có thể làm gì được đây? Đời này làm người, đến thì cũng đã đến rồi, học được cách dung hòa với vận mệnh mới là quan trọng nhất.
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Bạn có biết làm sao để cảm nhận rằng mình đang trưởng thành hay không? Đó chính là hai khoảnh khắc khi nhắm mắt và mở mắt mỗi ngày của chúng ta đấy. Nhắm mắt lại, ngủ đi thôi, những trải nghiệm tồi tệ đều đã trôi qua cả rồi, giờ phút này, mình vẫn có thể nằm trên giường để tập trung vào giấc ngủ cũng có nghĩa là mình hãy còn sống, chẳng có chuyện gì là to tát cả. Mở mắt ra, tỉnh dậy thôi, lại một ngày mới bắt đầu với bao điều còn chưa hé mở, hãy ôm ấp niềm mong mỏi để đón nhận những sắp xếp mà vận mệnh đã an bài, có lẽ ngày hôm nay, ta sẽ gặp được điều gì đó mới mẻ tuyệt vời nhất không chừng!
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Rất nhiều người trải qua thất bại sẽ an ủi mình rằng: Khi Thượng đế đóng một cánh cửa, ngài sẽ mở ra một cánh cửa khác. Một cánh cửa đã bị đóng lại rồi, mở thêm một cánh cửa khác nữa thì có tác dụng gì đây? Hít thở bầu không khí trong lành, rồi giương mắt nhìn những phong cảnh chẳng thuộc về mình qua khung cửa đó hay sao? Thất bại có đáng sợ không? Đáng sợ chứ. Khi ta cố gắng biến mình trở thành một con át chủ bài tiềm tàng thì hãy tự hỏi xem, làm sao để có thể biến nó thành một con bài tẩy!
                            </p>
                            <p className="w-full text-sm md:text-base my-2">
                                -  Cuộc sống không phải là vòng lặp vô tận, bước vào ngõ cụt cũng là bởi bản thân mình đi nhầm đường mà thôi. Vẫn còn có người thương bạn, vẫn còn có việc để làm, vẫn còn có thể thấy được hy vọng, vậy thì hãy cứ gió mặc gió, mưa mặc mưa.
                            </p>
                        </div>
                    }


                    {showContent === 5 &&
                        <>
                            <div className="flex flex-col py-1 px-4">
                                <span className="text-sm md:text-base py-2">Loại sản phẩm</span>
                                <span className="text-sm md:text-base py-2">Kích thước</span>
                                <span className="text-sm md:text-base py-2">Số trang</span>
                                <span className="text-sm md:text-base py-2">Tác giả</span>
                                <span className="text-sm md:text-base py-2">Nhà xuất bả</span>
                            </div>
                            <div className="flex flex-col py-1 px-4">
                                <span className="text-sm md:text-base py-2">Bìa mềm</span>
                                <span className="text-sm md:text-base py-2">14 x 20.5 cm</span>
                                <span className="text-sm md:text-base py-2">231</span>
                                <span className="text-sm md:text-base py-2">Văn Cát Nhi</span>
                                <span className="text-sm md:text-base py-2">NXB Hồng Đức</span>
                            </div>
                        </>

                    }
                </div>
            </div>

            <div className="flex flex-wrap w-full bg-white rounded-sm py-3 shadow-md">
                <span className="text-base md:text-lg lg:text-xl font-semibold mx-4 w-full">SẢN PHẨM LIÊN QUAN</span>

                <div className="w-full">
                    <Slider {...settings}>
                        {DetailBookData.map((item, index) => {
                            return (
                                <div key={index} className="grid relative w-full hover:cursor-pointer">
                                    <div onClick={() => navigate(PATH.detail_book)} className="flex relative justify-center w-full drop-shadow-2xl mt-3 transition ease-in-out delay-100 hover:scale-105 duration-100 ">
                                        <img className="w-2/3 justify-center" src={item.image} alt="New Book" />
                                        <div className="flex w-full z-20 absolute px-4">
                                            <div className="bg-orange-400 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                                                <span className="text-sm md:text-base text-white font-semibold text-center">{item.sale}%</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="grid w-full py-3 mx-4">
                                        <span className={`${style['product_name']} self-center whitespace-normal w-3/4 text-sm md:text-base lg:text-lg font-medium break-words`}>{item.name}</span>
                                    </div>


                                    <div className="flex flex-wrap justify-start font-medium text-base mx-4">
                                        <span className="text-red-600 w-full text-lg md:text-xl">{item.new_cost}.000đ</span>
                                        <span className="line-through text-neutral-400 w-full text-sm md:text-base">{item.old_cost}.000đ</span>
                                    </div>

                                    <div className="flex w-full mt-3">
                                        <div className="flex w-full rounded-md border-2 border-slate-700 mx-4 items-center justify-center">
                                            <FiShoppingBag className="w-5 h-5 text-slate-700" />
                                            <div className="text-sm md:text-base lg:text-lg text-slate-700 py-1 px-0.5 whitespace-nowrap">Thêm giỏ hàng</div>
                                        </div>
                                    </div>
                                   

                                </div>
                               
                            )
                        })}

                    </Slider>
                </div>
            </div>

            <div className="flex flex-wrap w-full bg-white rounded-sm py-3 mt-4 shadow-md">
                <span className="text-base md:text-lg lg:text-xl font-semibold w-full px-4">ĐÁNH GIÁ SẢN PHẨM</span>

                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col border-b-2">
                        <div className="flex w-full my-5 px-4">
                            <div className="flex flex-row w-full md:w-3/12">
                                <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                                    <img src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-1/155979415_2946100539003750_7844294579569965404_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vi4UJAmnQksAX_ov2_r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT87WeMXH9EWvZ1K0v9t-Dhb2QrPGpFf1uu5Ph2ImwdZbw&oe=637B6BAC"
                                        className="w-full bg-gray-200 rounded-full" alt="Avatar_User" />
                                </div>

                                <div className="flex flex-col ml-2">
                                    <span className="text-xs lg:text-sm font-bold">Tạ Minh Vũ</span>
                                    <span className="text-xs lg:text-sm font-semibold text-gray-400 my-1">11:20 27/12/2022</span>
                                </div>
                            </div>

                            <div className="flex ml-4 w-full md:w-9/12">
                                <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                                <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">Nội dung rất hay, rất đặc sắc, những câu chuyện được miêu tả rất chân thực, xúc động.</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col border-b-2">
                        <div className="flex w-full my-5 px-4">
                            <div className="flex flex-row w-full md:w-3/12">
                                <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                                    <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1Rph2yqJK04AX_ViEJO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_LC9lA-uhMzkit_9oI_nZtJahJlVPxNKztQ4tSNuco6w&oe=637C7278"
                                        className="w-full bg-gray-200 rounded-full" alt="Avatar_User" />
                                </div>

                                <div className="flex flex-col ml-2">
                                    <span className="text-xs lg:text-sm font-bold">Võ Quang Trường</span>
                                    <span className="text-xs lg:text-sm font-semibold text-gray-400 my-1">12:30 20/12/2022</span>
                                </div>
                            </div>

                            <div className="flex ml-4 w-full md:w-9/12">
                                <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                                <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">Đây là quyển sách hay nhất mình từng đọc, lời văn của tác giả lôi cuốn thật sự.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap w-full justify-end items-center px-4 mt-4">
                    <BsArrowLeftCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-400" />
                    <span className="mx-2 font-medium text-sm md:text-base lg:text-lg">1</span>
                    <BsArrowRightCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-700" />
                </div>
            </div>
        </div>
    )
}

export default DetailBook;