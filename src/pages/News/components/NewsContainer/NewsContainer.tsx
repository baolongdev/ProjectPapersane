import React from "react"
import ImportantNews from "./components/ImportantNews/ImportantNews"
import NewsCardsBoard from "./components/NewsCardsBoard/NewsCardsBoard"

import "./NewsContainer.css"
import { NewsCardProp } from "./components/NewsCard/NewsCard"

interface NewsContainerProps {
  newsForImportantNews: NewsCardProp
  newsForNewsCardsBoard: NewsCardProp[]
}

function NewsContainer({
  newsForImportantNews,
  newsForNewsCardsBoard,
}: NewsContainerProps) {
  return (
    <div className="news-container pt-36">
      <ImportantNews
        title={newsForImportantNews.title}
        summary={newsForImportantNews.summary}
        imageSrc={newsForImportantNews.imageSrc}
      />
      <div className="horizontal-line rounded-xl" />
      <NewsCardsBoard listOfNews={newsForNewsCardsBoard} />
    </div>
  )
}

export default NewsContainer
