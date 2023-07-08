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
        "link": "/bookflix",
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
    const activities = [
        {
            img: "/activities/1.jpg",
            title: "Lễ hội âm nhạc",
            subtitle: "",
            link: "hots/lhan",
            linkFB: "https://www.facebook.com/759662799498945"
        }, {
            img: "/activities/2.jpg",
            title: "Lễ tri ân và trưởng thành",
            subtitle: "",
            link: "hots/lta&th",
            linkFB: "https://www.facebook.com/576520341290807"
        }, {
            img: "/activities/3.jpg",
            title: "HOA PHƯỢNG ĐỎ",
            subtitle: "Chiến dịch Tình nguyện hè",
            link: "hots/hpd",
            linkFB: "https://www.facebook.com/759662799498945"
        }
    ]

    return {
        titleTab, questions, activities
    };
};

export default InitialVariable;