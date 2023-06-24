import React, { useEffect } from "react"

import "./NewsCard.css"

export interface NewsCardProp {
  title: string;
  summary: string;
  imageSrc: string;
}

export default function NewsCard({ imageSrc, title, summary }: NewsCardProp) {
  // Use ScrollReveal to reveal news
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
    })

    // Animate the first element in each row
    sr.reveal(".news-card:nth-child(3n+1)", { delay: 50 })

    // Animate the second element in each row
    sr.reveal(".news-card:nth-child(3n+2)", { delay: 150 })

    // Animate the third element in each row
    sr.reveal(".news-card:nth-child(3n+3)", { delay: 250 })

    // Clean up the ScrollReveal instance
    return () => {
      sr.destroy()
    }
  }, [])

  return (
    <div className="sm:w-1/3 lg:w-1/4 p-3 mb-10 rounded-xl shadow-lg news-card">
      <div className="flex justify-center news-card__image-container">
        <img className="object-cover news-card__image" src={imageSrc} alt="" />
      </div>

      <div className="news-card__content">
        <h1 className="mt-3 mb-3 news-card__title">{title}</h1>
        <p className="news-card__summary">{summary}</p>
        <div className="flex">
          <a href="#" className="inline-flex items-center news-card__button">
            Tìm hiểu thêm
            <i className="ri-arrow-right-line news-card__button-icon"></i>
          </a>
        </div>
      </div>
    </div>
  )
}
