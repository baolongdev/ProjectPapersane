import React, { Fragment, useEffect } from "react"
import NewsContainer from "./components/NewsContainer/NewsContainer"
import Header from "./components/Header/Header"
import InitialVariable from "../../store/InitialVariable"

import "./News.css"

const News = () => {
  const example_NewsImportant = {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
    title: "Tiêu đề",
    summary: "Tóm tắt ngắn",
  }

  const example_NewsForNewsBoard = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
      title: "Tiêu đề 1",
      summary: "Tóm tắt ngắn 1",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
      title: "Tiêu đề 2",
      summary: "Tóm tắt ngắn 2",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
      title: "Tiêu đề 3",
      summary: "Tóm tắt ngắn 3",
    },
  ]

  // The dark theme useEffect found in "Landing.tsx"
  useEffect(() => {
    /*=============== DARK LIGHT THEME ===============*/
    const themeButton = document.getElementById("theme-button")
    const darkTheme = "dark-theme"
    const iconTheme = "ri-sun-line"

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem("selected-theme")
    const selectedIcon = localStorage.getItem("selected-icon")

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () =>
      document.body.classList.contains(darkTheme) ? "dark" : "light"
    const getCurrentIcon = () =>
      themeButton?.classList.contains(iconTheme)
        ? "ri-moon-line"
        : "ri-sun-line"

    // We validate if the user previously chose a topic
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      )
      themeButton?.classList[
        selectedIcon === "ri-moon-line" ? "add" : "remove"
      ](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    const handleThemeToggle = () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton?.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem("selected-theme", getCurrentTheme())
      localStorage.setItem("selected-icon", getCurrentIcon())
    }

    themeButton?.addEventListener("click", handleThemeToggle)

    return () => {
      // Cleanup: remove the event listener when the component unmounts
      themeButton?.removeEventListener("click", handleThemeToggle)
    }
  }, []) // empty dependency array to run the effect only once

  return (
    <Fragment>
      <Header initial={InitialVariable()} />
      <h1 className="pt-36 text-center text-6xl news-page-title"> TIN TỨC </h1>
      <NewsContainer
        newsForImportantNews={example_NewsImportant}
        newsForNewsCardsBoard={example_NewsForNewsBoard}
      />
    </Fragment>
  )
}

export default News
