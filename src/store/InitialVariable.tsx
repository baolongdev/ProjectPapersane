import React, { useState } from "react";
const InitialVariable = () => {
    const titleTab = [{
        "title": "Trang chủ",
        "link": "#home",
        "class": ""
    }, {
        "title": "Giới thiệu",
        "link": "#about",
        "class": ""
    }, {
        "title": "CLB/DA",
        "link": "#clbda",
        "class": ""
    }, {
        "title": "Liên hệ",
        "link": "#contact",
        "class": ""
    }, {
        "title": "BOOKFLIX",
        "link": "/bookflix/books",
        "class": "btn-link"
    }];
    // {
    //     "title": "Sản phẩm",
    //         "link": "#products",
    //             "class": ""
    // },
    const questions = [
        {
            'Group': [
                {
                    "question:": "My flowers are falling off or dying?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "What causes leaves to become pale?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "What causes brown crispy leaves?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                },
            ]
        },
        {
            'Group': [
                {
                    "question:": "How do i choose a plant?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "How do I change the pots?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                }, {
                    "question:": "Why are gnats flying around my plant?",
                    "answer": "Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant."
                },
            ]
        }
    ]
    const ativities = [
        {
            img: "/activities1.jpg",
            title: "Lễ hội âm nhạc",
            subtitle: "",
            link: "lhan"
        }, {
            img: "/activities2.jpg",
            title: "Lễ tri ân và trưởng thành",
            subtitle: "",
            link: "lta&th"
        }, {
            img: "/hpd.png",
            title: "HOA PHƯỢNG ĐỎ",
            subtitle: "Chiến dịch Tình nguyện hè",
            link: "hpd"
        }
    ]
    const clb_da = [
        {
            name: "CLB Văn hóa Việt Nam",
            tag: "vh clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/240657997_1002924310433975_7659640052996752264_n.png?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TW8aAzSLxc8AX_RwKcL&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDGDVEPB9bN3flWYywjbcb_5xrCiqkMpLJR0c91zEJ-uw&oe=649F2FFE",
            link: "https://www.facebook.com/vanhoavntdnschool"
        },
        {
            name: "CLB Văn hóa Đức",
            tag: "vh clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/306656319_468547261971212_208167100740497489_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KRo6f1rwg7EAX9t1g6u&_nc_ht=scontent.fdad3-1.fna&oh=00_AfBGP3Xd2lGsdsoizzJEYMqrc-8BcC2YjdLKtZIbxditaQ&oe=649F3011",
            link: "https://www.facebook.com/deutschtdn"
        },
        {
            name: "CLB Văn hóa Hoa Kỳ",
            tag: "vh clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/311306244_492390709583699_8869758578421185296_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x9G5XcmUGFsAX9WfP3P&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDYoQah-_uTNEn2X11IxSBZHT4PyH2rPdcugOZ1CWaGhg&oe=649F4742",
            link: "https://www.facebook.com/amica.tdn"
        },
        {
            name: "CLB Văn hóa Nhật Bản",
            tag: "vh clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/356086188_567604482202565_1896329277212435821_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-bOzALnMVN8AX8Mv6Rh&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDCsDadqi4xqXyIvRKzM5kaV5ZRMiwzsFuPWkRqxoV0aQ&oe=649F8FD1",
            link: "https://www.facebook.com/clbvanhoanhatbantdn"
        },
        {
            name: "CLB Hàn Quốc",
            tag: "vh clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/355141213_581354987454008_3298417575863272842_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1tymab1ezNsAX_YDB-i&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDvVEsAh5st2Vv7d80rTnpJNQbrulrCOD-iUMlJTucPxQ&oe=649F4CDD",
            link: "https://www.facebook.com/clbhanquoctdn"
        },
        {
            name: "CLB Văn hóa Trung Hoa",
            tag: "vh clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/308999065_427729509448710_4460160373260492451_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pRmnH5XSxe4AX9PJRrG&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBlqP0pt0OSKjYxwRWyEpueeRtwitWxL5VzpeCEqfJRqw&oe=649EE802",
            link: "https://www.facebook.com/clbvanhoatrunghoatrandainghia"
        },
        {
            name: "CLB Kỹ năng Lửa Xanh",
            tag: "knnt clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/312379437_492300482926982_1834739882277039021_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xLG8Xc60MngAX-N4DB-&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDUe9_GzeVNeCJ_v3fJJCxWFm0E5OcfcxQbO2frpU5rPg&oe=64A03A0F",
            link: "https://www.facebook.com/clbluaxanhtdn"
        },
        {
            name: "CLB Nhiếp ảnh - Specture",
            tag: "knnt clb",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/307012867_419552300320946_5067098394220980545_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CyEk7McTFY8AX8b99vS&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCYeabDoYNdZ8U79uKNontuQhA9WgDxaJvTrlt57jb0Uw&oe=649F6F04",
            link: "https://www.facebook.com/clbnhiepanhtdn"
        },
        {
            name: "CLB Văn Nghệ",
            tag: "knnt clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/354063041_271073188828485_6861215195996454587_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QHnuncx6GAoAX8YlU5r&_nc_ht=scontent.fdad3-5.fna&oh=00_AfB-CbvOXsu5yTYEuUfKvdvMOKgRgkbc5rzkBfWC1GIh6g&oe=64A092E3",
            link: "https://www.facebook.com/clbvannghetdn"
        },
        {
            name: "CLB Mỹ Thuật",
            tag: "knnt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/330978513_556338046461859_8211620034261947117_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZKXoPNjH6vcAX-ozMtH&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDnD6-M0okFYX2RqEBApHRdb0BQxNJ8LhAVmtb7L36FJA&oe=649FFBCB",
            link: "https://www.facebook.com/tdnartclub"
        },
        {
            name: "CLB Handmade",
            tag: "knnt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/351467448_735530198371669_3569249676588972358_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=z_7vuaRgbS0AX-BaIbt&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDZH24sA6JLCmDD3uue5o4Mo69jr8vxnRFVB-7edhwXgA&oe=64A01AF7",
            link: "https://www.facebook.com/clbhandmadetdn"
        },
        {
            name: "Dự án Điện ảnh The CINEX",
            tag: "knnt da",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/281860071_120381667330411_6733620033603858946_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7bOihBv1BhEAX_MH92u&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDujXdX02RFsWkvVbUOF2xVvy0gBDXBmSdpY6Xl3bV_SA&oe=649F4A1C",
            link: "https://www.facebook.com/thecinex.ctdn"
        },
        {
            name: "Mô hình Liên Hợp Quốc TOMUN",
            tag: "knnt da",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/307542713_585326756618012_7990587999739435530_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fQ-DluBcXI0AX_NCWp-&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCs4FHoezoe87hbJ819OiGiz3jVY2x7gQjq6OQcFIL6_Q&oe=649EE361",
            link: "https://www.facebook.com/tomun2021"
        },
        {
            name: "CLB Kỹ năng công chúng",
            tag: "knnt clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/328520156_542676674505797_3034675964004032061_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=c6021c&_nc_ohc=D2bW2v0s8h8AX_0Jftq&_nc_ht=scontent.fdad3-5.fna&oh=00_AfC7FgnZFKek12oVKpgciNT48ubrL-vwrb7qtt8nz7pbbA&oe=649F0BBB",
            link: "https://www.facebook.com/kncongchungtdn"
        },
        {
            name: "CLB Cờ Vua",
            tag: "knnt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/226401323_116047860708829_4781453401192394267_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OaOn-bQvfvwAX98dJUh&_nc_ht=scontent.fdad3-1.fna&oh=00_AfB6-6vjUjIosidrlE26wVYP17nJTygk9N-nhpw7yELqIA&oe=649F7381",
            link: "https://www.facebook.com/TDNChessClub"
        },
        {
            name: "CLB Sách - Papersane",
            tag: "httt clb",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/345446525_3412427162309218_9025898043751048636_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=BgnwblWA8a4AX9yJlvi&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDA1NEjEpjvzS0CNLDrtQBhPHo_WdnhePmEy3WQTflCVw&oe=649FC334",
            link: "https://www.facebook.com/papersanetdn"
        },
        {
            name: "Câu lạc bộ Tiếng Anh - EC",
            tag: "httt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/346975558_722864059594729_6414503108594641546_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qdXMcNos8l4AX_iw5XN&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAwIFxif5GfINGr_2em3qVT95Gwwcv_8G79K4WRuLELkg&oe=64A0880D",
            link: "https://www.facebook.com/clbtienganhtdn"
        },
        {
            name: "Câu lạc bộ Vật lí+",
            tag: "httt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/305402130_606047311104901_650656835451912632_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NCXJ3ahrc-UAX-Ogeg_&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDTpCkEWwVz-ZM1CmzgGahzvkDEq9qj1PESsZmeYvkCmg&oe=649F3887",
            link: "https://www.facebook.com/clbvatlitdn"
        },
        {
            name: "Câu lạc bộ Hoá học",
            tag: "httt clb",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/308356035_390053599991311_2612049527341093440_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UnSZUsXa0d4AX-gWwLz&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCY4ZxDABDpHhPNEuDz9tRE8MvaToPm0D1n2W29QtUnCQ&oe=649FE858",
            link: "https://www.facebook.com/clb.hoahoc.tdn"
        },
        {
            name: "Câu lạc bộ Tin học",
            tag: "httt clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/217917746_4700106226669617_3129748023066873216_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=L7jHPaMEJzIAX95u4Yp&_nc_ht=scontent.fdad3-5.fna&oh=00_AfA8MUVd4UIHagXOLGcTmfXtMjdv38ikZ77eeaStYGeQhQ&oe=649F44B5",
            link: "https://www.facebook.com/tdntinhoc"
        },
        {
            name: "CLB Truyền thông học đường",
            tag: "httt clb",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/308992370_398283295824647_7664519193352774293_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NYMGazz6JCMAX9RglXN&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCWjvh1Mgj4qiD-JzHhbtzjpVbPrUcWh4vS0p_2gCX8pg&oe=649FCDE0",
            link: "https://www.facebook.com/truyenthonghocduongtdn"
        },
        {
            name: "CLB Báo chí - Truyền thông",
            tag: "httt clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340227492_168938132708780_7737907958629721192_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bjfFGEcLsisAX9qRMWc&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCZHs0dAg3NhB6lZaxQ5i0mJ1hO4zBL1DiGhlEpzob1bA&oe=649FCBDC",
            link: "https://www.facebook.com/clbbaochitruyenthongtdn"
        },
        {
            name: "CLB Môi trường - ECO",
            tag: "khxhda clb",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/344856877_618625283507887_7207947033378910108_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VH89Dy6GSEUAX_dX9Kq&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCbjZ5O5VO5YjaM90O_-yEpaONW1yj_B9SXdDCK8ePG-Q&oe=649EFF57",
            link: "https://www.facebook.com/ecotdn"
        },
        {
            name: "Dự án Tâm lý - The Mersy Act",
            tag: "khxhda da",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/330995623_1116666389115726_6835201659265311202_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KPpTfaPDne4AX-_RcKG&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCJEFN0UWebcfLplE4xEPPSk_v5llbsrPjJwr6q1EJdoQ&oe=64A06A8C",
            link: "https://www.facebook.com/themersyact"
        },
        {
            name: "Dự án The Plasbit Campaign",
            tag: "khxhda da",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/309198886_143922531676989_2378833298240655786_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kCo-3c0AmCoAX_SLCVp&_nc_ht=scontent.fdad3-4.fna&oh=00_AfA99ubvZuSr9FDpCQlPkEJmr91ip_ya_P7vzAYxGHknoA&oe=649F039C",
            link: "https://www.facebook.com/theplasbitcampaign"
        },
        {
            name: "Dự án Career Venture",
            tag: "khxhda da",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/306940405_416918653909050_5478275181621124749_n.png?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6Q6ZN1NhGdwAX-Zpuje&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAIwCBuqX7U2A4tlNbZ8NneZnX_cppPhtlFng8Drn0oAg&oe=649F8F96",
            link: "https://www.facebook.com/CareerVentureTDN"
        },
        {
            name: "Dự án Ngọt LAB",
            tag: "khxhda da",
            img: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/315714207_480020914234151_385861942712338876_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4Ub5GFUSvmIAX8dHwc0&_nc_ht=scontent.fdad3-1.fna&oh=00_AfADEZ_CFK-PTgiVFTTwMM6JYv1ts2ve69MtvmL22rt90Q&oe=649EE13F",
            link: "https://www.facebook.com/ngotlab"
        },
        {
            name: "Dự án Thể thao học đường - Sportify",
            tag: "khxhda clb",
            img: "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/312385178_113657468215591_4536393907115069100_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KBSbY3FEZpAAX_H1Unb&_nc_ht=scontent.fdad3-5.fna&oh=00_AfD7Zeisoi1LH4ykuENIs85GeH4Q_AArol2sMfIOo76a5Q&oe=649FD365",
            link: "https://www.facebook.com/profile.php?id=100087346698039"
        },
        {
            name: "Dự án IRIS",
            tag: "khxhda da",
            img: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/334407719_739891580947688_3421625566489325598_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3mZeNRmykiYAX-qZLwp&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCyfEnIx8dtlQmGFwQBLanQeso6LIP2CrR0e5fX_5FoKQ&oe=649EAED7",
            link: "https://www.facebook.com/the.irisproject.tdn"
        }
    ]
    return {
        titleTab, questions, ativities, clb_da
    };
};

export default InitialVariable;