import { PATH } from "../../constants/path";
import { HiHome } from "react-icons/hi";
import { BsStars,BsListStars,BsPersonLinesFill,BsPersonBadgeFill} from "react-icons/bs";
import { GiFireZone } from "react-icons/gi";
import { AiOutlineLineChart } from "react-icons/ai";

export const MenuData = [
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
        link: PATH.category.dashboard,
        subMenuItem1: [
            {
                id: 1,
                name: "KINH TẾ - KINH DOANH", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Quản trị - Lãnh đạo",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Nhân vật - Bài học doanh nghiệp",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Marketing - Bán hàng",
                        link: "",
                    }
                ]
            },
            {
                id: 2,
                name: "TÂM LÝ - KỸ NĂNG SỐNG", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Tâm lý",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Kỹ năng sống",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Rèn luyện nhân cách",
                        link: "",
                    }
                ]
            },
            {
                id: 3,
                name: "HỌC NGOẠI NGỮ", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Tiếng Anh",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Tiếng Trung",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Tiếng Thái",
                        link: "",
                    },
                    {
                        id: 4,
                        name: "Tiếng Nhật",
                        link: "",
                    },
                    {
                        id: 5,
                        name: "Tiếng Hàn",
                        link: "",
                    },
                    {
                        id: 6,
                        name: "Tiếng Pháp",
                        link: "",
                    }
                ]
            },
            {
                id: 4,
                name: "GIÁO KHOA - THAM KHẢO", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Mẫu giáo",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Sách cấp 1 - Tiểu học",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Sách cấp 2 - Trung học cơ sở",
                        link: "",
                    },
                    {
                        id: 4,
                        name: "Sách cấp 3 - Trung học phổ thông",
                        link: "",
                    },
                    {
                        id: 5,
                        name: "Cẩm nang tuyển sinh",
                        link: "",
                    },
                    {
                        id: 6,
                        name: "Sách tham khảo Đại học",
                        link: "",
                    },
                    {
                        id: 7,
                        name: "Ôn luyện thi ĐH/CĐ",
                        link: "",
                    }
                ]
            },
            {
                id: 5,
                name: "SÁCH NUÔI DẠY CON", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Mẹ và bé",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Giáo dục trẻ nhỏ",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Cẩm nang làm cha mẹ",
                        link: "",
                    }
                ]
            },
            {
                id: 6,
                name: "SÁCH VĂN HỌC", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Light Novel",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Tiểu thuyết",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Huyền bí - Giả tưởng - Kinh dị",
                        link: "",
                    },
                    {
                        id: 4,
                        name: "Truyện ngắn - Tản văn",
                        link: "",
                    }
                ]
            },
            {
                id: 7,
                name: "THỂ DỤC THỂ THAO - GIẢI TRÍ", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Cờ tướng - Cờ vua",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Thể thao",
                        link: "",
                    },
                ]
            },
            {
                id: 8,
                name: "NỮ CÔNG GIA CHÁNH", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Sách bí quyết làm đẹp",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Công thức nấu ăn",
                        link: "",
                    },
                    {
                        id: 3,
                        name: "Khéo tay hay làm",
                        link: "",
                    },
                ]
            },
            {
                id: 9,
                name: "SÁCH THƯỞNG THỨC ĐỜI SỐNG", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Kiến thức tổng hợp",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Phong thuỷ - tử vi",
                        link: "",
                    },
                ]
            },
            {
                id: 10,
                name: "LỊCH SỬ - ĐỊA LÝ - TÔN GIÁO", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Lịch sử Việt Nam",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Lịch sử nước ngoài",
                        link: "",
                    },
                ]
            },
            {
                id: 11,
                name: "KHOA HỌC - KỸ THUẬT - Y HỌC", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Nông - Lâm - Ngư nghiệp",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Công nghệ thông tin",
                        link: "",
                    },
                ]
            },
            {
                id: 12,
                name: "PHÁP LUẬT - CHÍNH TRỊ - TRIẾT HỌC", 
                link: "",
                subMenuItem2: [
                    {
                        id: 1,
                        name: "Đội - Đoàn - Đảng",
                        link: "",
                    },
                    {
                        id: 2,
                        name: "Triết học - Lý luận chính trị",
                        link: "",
                    },
                ]
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