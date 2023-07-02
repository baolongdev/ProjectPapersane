import React from "react";
const DataClb = () => {
    const clbinfo = [
        {
            id: "vanhoavntdnschool",
            tag: "vh clb",
            name: "CLB Văn hóa Việt Nam",
            link: "https://www.facebook.com/vanhoavntdnschool",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "deutschtdn",
            tag: "vh clb",
            name: "CLB Văn hóa Đức",
            link: "https://www.facebook.com/deutschtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "amica.tdn",
            tag: "vh clb",
            name: "CLB Văn hóa Hoa Kỳ",
            link: "https://www.facebook.com/amica.tdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbvanhoanhatbantdn",
            tag: "vh clb",
            name: "CLB Văn hóa Nhật Bản",
            link: "https://www.facebook.com/clbvanhoanhatbantdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbhanquoctdn",
            tag: "vh clb",
            name: "CLB Hàn Quốc",
            link: "https://www.facebook.com/clbhanquoctdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbvanhoatrunghoatrandainghia",
            tag: "vh clb",
            name: "CLB Văn hóa Trung Hoa",
            link: "https://www.facebook.com/clbvanhoatrunghoatrandainghia",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbluaxanhtdn",
            tag: "knnt clb",
            name: "CLB Kỹ năng Lửa Xanh",
            link: "https://www.facebook.com/clbluaxanhtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbnhiepanhtdn",
            tag: "knnt clb",
            name: "CLB Nhiếp ảnh - Specture",
            link: "https://www.facebook.com/clbnhiepanhtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbvannghetdn",
            tag: "knnt clb",
            name: "CLB Văn Nghệ",
            link: "https://www.facebook.com/clbvannghetdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "tdnartclub",
            tag: "knnt clb",
            name: "CLB Mỹ Thuật",
            link: "https://www.facebook.com/tdnartclub",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbhandmadetdn",
            tag: "knnt clb",
            name: "CLB Handmade",
            link: "https://www.facebook.com/clbhandmadetdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "thecinex.ctdn",
            tag: "knnt da",
            name: "Dự án Điện ảnh The CINEX",
            link: "https://www.facebook.com/thecinex.ctdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "tomun2021",
            tag: "knnt da",
            name: "Mô hình Liên Hợp Quốc TOMUN",
            link: "https://www.facebook.com/tomun2021",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "kncongchungtdn",
            tag: "knnt clb",
            name: "CLB Kỹ năng công chúng",
            link: "https://www.facebook.com/kncongchungtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "TDNChessClub",
            tag: "knnt clb",
            name: "CLB Cờ Vua",
            link: "https://www.facebook.com/TDNChessClub",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "papersanetdn",
            tag: "httt clb",
            name: "CLB Sách - Papersane",
            link: "https://www.facebook.com/papersanetdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbtienganhtdn",
            tag: "httt clb",
            name: "Câu lạc bộ Tiếng Anh - EC",
            link: "https://www.facebook.com/clbtienganhtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbvatlitdn",
            tag: "httt clb",
            name: "Câu lạc bộ Vật lí+",
            link: "https://www.facebook.com/clbvatlitdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clb.hoahoc.tdn",
            tag: "httt clb",
            name: "Câu lạc bộ Hoá học",
            link: "https://www.facebook.com/clb.hoahoc.tdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "tdntinhoc",
            tag: "httt clb",
            name: "Câu lạc bộ Tin học",
            link: "https://www.facebook.com/tdntinhoc",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "truyenthonghocduongtdn",
            tag: "httt clb",
            name: "CLB Truyền thông học đường",
            link: "https://www.facebook.com/truyenthonghocduongtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "clbbaochitruyenthongtdn",
            tag: "httt clb",
            name: "CLB Báo chí - Truyền thông",
            link: "https://www.facebook.com/clbbaochitruyenthongtdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "ecotdn",
            tag: "khxhda clb",
            name: "CLB Môi trường - ECO",
            link: "https://www.facebook.com/ecotdn",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "themersyact",
            tag: "khxhda da",
            name: "Dự án Tâm lý - The Mersy Act",
            link: "https://www.facebook.com/themersyact",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "theplasbitcampaign",
            tag: "khxhda da",
            name: "Dự án The Plasbit Campaign",
            link: "https://www.facebook.com/theplasbitcampaign",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "CareerVentureTDN",
            tag: "khxhda da",
            name: "Dự án Career Venture",
            link: "https://www.facebook.com/CareerVentureTDN",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "ngotlab",
            tag: "khxhda da",
            name: "Dự án Ngọt LAB",
            link: "https://www.facebook.com/ngotlab",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "profile.php_id=100087346698039",
            tag: "khxhda clb",
            name: "Dự án Thể thao học đường - Sportify",
            link: "https://www.facebook.com/profile.php?id=100087346698039",
            BgColor: "",
            logo: "logo.png"
        },
        {
            id: "the.irisproject.tdn",
            tag: "khxhda da",
            name: "Dự án IRIS",
            link: "https://www.facebook.com/the.irisproject.tdn",
            BgColor: "",
            logo: "logo.png"
        },
    ]
    return {
        clbinfo
    };
};

export default DataClb;