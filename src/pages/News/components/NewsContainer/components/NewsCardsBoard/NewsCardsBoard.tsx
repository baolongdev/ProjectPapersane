import React from "react"

import NewsCard from "../NewsCard/NewsCard"

import "./NewsCardsBoard.css"

const NewsCardsBoard = ({ listOfNews }: any) => {
  return (
    <div className="flex flex-wrap gap-4 pt-24 p-6 justify-center news-cards-board">
      {listOfNews.map((news: any) => {
        return (
          <NewsCard title={news.title} imageSrc={news.imageSrc} summary={news.summary} />
        )
      })}
    </div>
  )
}

export default NewsCardsBoard
