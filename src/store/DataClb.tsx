import React from "react";
const DataClb = () => {
    const clbinfo = [
        {
            id: "vanhoavntdnschool",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Văn hóa Việt Nam",
            link: "https://www.facebook.com/vanhoavntdnschool",
            TextColor: "colorwhite",
            BgColor: "#6A53A3",
            logo: "logo.png"
        },
        {
            id: "deutschtdn",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Văn hóa Đức",
            link: "https://www.facebook.com/deutschtdn",
            TextColor: " ",
            BgColor: "#FCF6AE",
            logo: "logo.png"
        },
        {
            id: "amica.tdn",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Văn hóa Hoa Kỳ",
            link: "https://www.facebook.com/amica.tdn",
            TextColor: " ",
            BgColor: "#FFFFFF",
            logo: "logo.png"
        },
        {
            id: "clbvanhoanhatbantdn",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Văn hóa Nhật Bản",
            link: "https://www.facebook.com/clbvanhoanhatbantdn",
            TextColor: " ",
            BgColor: "#F0D4E6",
            logo: "logo.png"
        },
        {
            id: "clbhanquoctdn",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Hàn Quốc",
            link: "https://www.facebook.com/clbhanquoctdn",
            TextColor: " ",
            BgColor: "#B8E4F4",
            logo: "logo.png"
        },
        {
            id: "clbvanhoatrunghoatrandainghia",
            tag: "vh clb",
            name: "CÂU LẠC BỘ Văn hóa Trung Hoa",
            link: "https://www.facebook.com/clbvanhoatrunghoatrandainghia",
            TextColor: "colorwhite",
            BgColor: "#AA1F24",
            logo: "logo.png"
        },
        {
            id: "clbluaxanhtdn",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Kỹ năng Lửa Xanh",
            link: "https://www.facebook.com/clbluaxanhtdn",
            TextColor: " ",
            BgColor: "#CBDFF0",
            logo: "logo.png"
        },
        {
            id: "clbnhiepanhtdn",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Nhiếp ảnh - Specture",
            link: "https://www.facebook.com/clbnhiepanhtdn",
            TextColor: "colorwhite",
            BgColor: "#131620",
            logo: "logo.png"
        },
        {
            id: "clbvannghetdn",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Văn Nghệ",
            link: "https://www.facebook.com/clbvannghetdn",
            TextColor: " ",
            BgColor: "#EADFD6",
            logo: "logo.png"
        },
        {
            id: "tdnartclub",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Mỹ Thuật",
            link: "https://www.facebook.com/tdnartclub",
            TextColor: "colorwhite",
            BgColor: "#A286B5",
            logo: "logo.png"
        },
        {
            id: "clbhandmadetdn",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Handmade",
            link: "https://www.facebook.com/clbhandmadetdn",
            TextColor: " ",
            BgColor: "#ABDFEA",
            logo: "logo.png"
        },
        {
            id: "thecinex.ctdn",
            tag: "knnt da",
            name: "Dự án Điện ảnh The CINEX",
            link: "https://www.facebook.com/thecinex.ctdn",
            TextColor: " ",
            BgColor: "#FFFFFF",
            logo: "logo.png"
        },
        {
            id: "tomun2021",
            tag: "knnt da",
            name: "Mô hình Liên Hợp Quốc TOMUN",
            link: "https://www.facebook.com/tomun2021",
            TextColor: "colorwhite",
            BgColor: "#153B28",
            logo: "logo.png"
        },
        {
            id: "kncongchungtdn",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Kỹ năng công chúng",
            link: "https://www.facebook.com/kncongchungtdn",
            TextColor: "colorwhite",
            BgColor: "#EC5D2A",
            logo: "logo.png"
        },
        {
            id: "TDNChessClub",
            tag: "knnt clb",
            name: "CÂU LẠC BỘ Cờ Vua",
            link: "https://www.facebook.com/TDNChessClub",
            TextColor: "colorwhite",
            BgColor: "#ED7A7A",
            logo: "logo.png"
        },
        {
            id: "papersanetdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Sách - Papersane",
            link: "https://www.facebook.com/papersanetdn",
            TextColor: " ",
            BgColor: "#D1E8E4",
            logo: "logo.png"
        },
        {
            id: "clbtienganhtdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Tiếng Anh - EC",
            link: "https://www.facebook.com/clbtienganhtdn",
            TextColor: "colorwhite",
            BgColor: "#F2A9A5",
            logo: "logo.png"
        },
        {
            id: "clbvatlitdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Vật lí+",
            link: "https://www.facebook.com/clbvatlitdn",
            TextColor: "colorwhite",
            BgColor: "#0A162E",
            logo: "logo.png"
        },
        {
            id: "clb.hoahoc.tdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Hoá học",
            link: "https://www.facebook.com/clb.hoahoc.tdn",
            TextColor: " ",
            BgColor: "#FFFFFF",
            logo: "logo.png"
        },
        // {
        //     id: "tdntinhoc",
        //     tag: "httt clb",
        //     name: "CÂU LẠC BỘ Tin học",
        //     link: "https://www.facebook.com/tdntinhoc",
        //     TextColor: "colorwhite",
        //     BgColor: "#161617",
        //     logo: "logo.png"
        // },
        {
            id: "truyenthonghocduongtdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Truyền thông học đường",
            link: "https://www.facebook.com/truyenthonghocduongtdn",
            TextColor: " ",
            BgColor: "#FFEED9",
            logo: "logo.png"
        },
        {
            id: "clbbaochitruyenthongtdn",
            tag: "httt clb",
            name: "CÂU LẠC BỘ Báo chí - Truyền thông",
            link: "https://www.facebook.com/clbbaochitruyenthongtdn",
            TextColor: "colorwhite",
            BgColor: "#8B1A24",
            logo: "logo.png"
        },
        {
            id: "ecotdn",
            tag: "khxhda clb",
            name: "CÂU LẠC BỘ Môi trường - ECO",
            link: "https://www.facebook.com/ecotdn",
            TextColor: " ",
            BgColor: "#E1E992",
            logo: "logo.png"
        },
        {
            id: "themersyact",
            tag: "khxhda da",
            name: "Dự án Tâm lý - The Mersy Act",
            link: "https://www.facebook.com/themersyact",
            TextColor: " ",
            BgColor: "#FDCA48",
            logo: "logo.png"
        },
        {
            id: "theplasbitcampaign",
            tag: "khxhda da",
            name: "Dự án The Plasbit Campaign",
            link: "https://www.facebook.com/theplasbitcampaign",
            TextColor: "colorwhite",
            BgColor: "#8FB079",
            logo: "logo.png"
        },
        {
            id: "CareerVentureTDN",
            tag: "khxhda da",
            name: "Dự án Career Venture",
            link: "https://www.facebook.com/CareerVentureTDN",
            TextColor: "colorwhite",
            BgColor: "#244086",
            logo: "logo.png"
        },
        {
            id: "ngotlab",
            tag: "khxhda da",
            name: "Dự án Ngọt LAB",
            link: "https://www.facebook.com/ngotlab",
            TextColor: "colorwhite",
            BgColor: "#9F90C2",
            logo: "logo.png"
        },
        {
            id: "profile.php_id=100087346698039",
            tag: "khxhda clb",
            name: "Dự án Thể thao học đường - Sportify",
            link: "https://www.facebook.com/profile.php?id=100087346698039",
            TextColor: "colorwhite",
            BgColor: "#151035",
            logo: "logo.png"
        },
        {
            id: "the.irisproject.tdn",
            tag: "khxhda da",
            name: "THE IRIS PROJECT",
            link: "https://www.facebook.com/the.irisproject.tdn",
            TextColor: " ",
            BgColor: "#FBDEEB",
            logo: "logo.png"
        },
    ]
    return {
        clbinfo
    };
};

export default DataClb;