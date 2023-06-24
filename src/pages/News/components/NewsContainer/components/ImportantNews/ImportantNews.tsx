import React from "react"

import "./ImportantNews.css"

import { NewsCardProp } from "../NewsCard/NewsCard"

const ImportantNews = ({ imageSrc, title, summary }: NewsCardProp) => {
  return (
    <>
      <div className="sm:w-4/6 p-3 mb-14 rounded-xl shadow-lg important-news">
        <h3 className="mb-5"> Tin mới nhất </h3>
        <div className="flex justify-center">
          <img
            className="object-cover important-news__image"
            src={imageSrc}
            alt=""
          />
        </div>

        <div className="important-news__content">
          <h1 className="mt-3 mb-3 important-news__title">
            {title}
          </h1>
          <p className="important-news__summary">{summary}</p>
          <div className="flex">
            <a
              href="#"
              className="inline-flex items-center important-news__button"
            >
              Tìm hiểu thêm
              <i className="ri-arrow-right-line important-news__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImportantNews
