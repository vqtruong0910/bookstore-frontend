import { PATH } from "../../constants/path";
import { HiHome } from "react-icons/hi";
import { BsStars,BsListStars,BsPersonLinesFill,BsPersonBadgeFill} from "react-icons/bs";
import { GiFireZone } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

export const NavbarData = [
    {   
        id: 1, 
        name: "Trang chủ", 
        icon: <HiHome className ="absolute top-4 left-1 w-7 h-7 md:hidden"/>,
        link: PATH.main,
    },
 
    {   
        id: 2, 
        name: "Danh mục",
        icon: <BsListStars className="absolute top-5 left-1 w-7 h-7 md:hidden" />,
        link: PATH.category_book, 
        submenu: true, 
        submenuItems: [
            {   name: "Tiểu thuyết", 
                link: PATH.novel_book
            },
            {   name: "Kinh tế", 
                link: PATH.economic_book
            },
            {   name: "Truyện ngắn - Tản văn", 
                link: PATH.short_story_prose_book
            },
            {   name: "Sách thiếu nhi", 
                link: PATH.kid_book
            },
            {   name: "Tâm lí - Kĩ năng sống", 
                link: PATH.mentality_lifeskill_book 
            },
            {   name: "Giáo khoa - Tham khảo", 
                link: PATH.text_reference_book
            },
            {   name: "Tiểu sử - Hồi ký", 
                link: PATH.biography_memoir_book 
            },
            {   name: "Sách học ngoại ngữ", 
                link: PATH.foreign_book
            },
        ]
    },

    {   
        id:3, 
        name:"Nhà xuất bản",
        icon: <BsPersonLinesFill className ="absolute top-4 left-1 w-7 h-7 md:hidden" />,
        link: PATH.publisher_book,
        submenu: true, 
        submenuItems: [
            {name: "Đông A", link:"#"},
            {name: "Đinh Tị Books", link: "#"},
            {name: "Nhã Nam", link:"#"},
            {name: "NXB Kim Đồng", link:"#"},
            {name: "NXB Trẻ", link: "#"},
            {name: "NXB Giáo dục", link: "#"},
            {name: "NXB Hội Nhà Văn", link: "#"},
            {name: "NXB Phụ nữ Việt Nam", link: "#"},
        ]
    },

    {
        id:4,
        name: "Tác giả",
        icon: <BsPersonBadgeFill className ="absolute top-4 left-1 w-7 h-7 md:hidden" />,
        link: PATH.author_book,
        submenu: true, 
        submenuItems: [
            {name: "Thích Nhất Hạnh", link:"#"},
            {name: "Nguyễn Nhật Ánh", link: "#"},
            {name: "Tô Hoài", link:"#"},
            {name: "Phạm Công Luận", link:"#"},
            {name: "Keigo Higashino", link: "#"},
            {name: "Dale Carnegie", link: "#"},
            {name: "Murakami Haruki", link: "#"}
        ]
    },

    {   
        id: 5, 
        name: "Mới nhất", 
        icon: <BsStars className ="absolute top-4 left-1 w-7 h-7 md:hidden"/>,
        link: PATH.new_book
    },
    {   
        id: 6, 
        name: "Bán chạy", 
        icon: <GiFireZone className ="absolute top-4 left-1 w-7 h-7 md:hidden" />,
        link: PATH.bestseller_book
    },
    {   
        id: 7, 
        name: "Phổ biến", 
        icon: <AiOutlineLineChart className ="absolute top-5 left-1 w-7 h-7 md:hidden" />,
        link: PATH.popular_book
    },
];