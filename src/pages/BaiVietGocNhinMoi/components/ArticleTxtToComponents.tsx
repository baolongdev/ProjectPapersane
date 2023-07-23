import { Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

interface Props {
  articleParts: string[]
}

const ArticleTxtToComponents = ({ articleParts }: Props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  function ImgSection({ src }: { src: string }) {
    return <img src={src} style={{ alignSelf: "center", width: calculateImageWidth() }} />
  }

  function HeadingSection({ children }: { children: any }) {
    return (
      <Typography variant="h4" align="center" fontFamily="var(--body-font-bookflix)" color="black" fontWeight="normal">
        {children}
      </Typography>
    )
  }

  function BodyTextSection({ children }: { children: any }) {
    return (
      <Typography variant="h6" fontFamily="var(--body-font-bookflix)" color="black" fontWeight="normal">
        {children}
      </Typography>
    )
  }

  useEffect(() => {
    // Update the screen width on window resize
    const handleResize = () => {
      console.log("resized bro")
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const calculateImageWidth = () => {
    if (screenWidth >= 900) {
      const maxWidth = 800
      const minWidth = 400
      const maxScreenWidth = 1920
      const minScreenWidth = 900
      // formula to make pic width scale linearly with screen width
      const width = ((screenWidth - minScreenWidth) / (maxScreenWidth - minScreenWidth)) * (maxWidth - minWidth) + minWidth
      return Math.round(width)
    } else {
      const maxWidth = 500
      const minWidth = 300
      const maxScreenWidth = 750
      const minScreenWidth = 320
      // formula to make pic width scale linearly with screen width
      const width = ((screenWidth - minScreenWidth) / (maxScreenWidth - minScreenWidth)) * (maxWidth - minWidth) + minWidth
      return Math.round(width)
    }
  }

  return (
    <>
      {articleParts.map((part) => {
        const key = part

        if (part === "") return <React.Fragment key={key}></React.Fragment>

        if (part.includes("<BodyTextSection>")) {
          part = part.replace("<BodyTextSection>", "").replace("</BodyTextSection>", "").trimStart().trimEnd()
          return (
            <BodyTextSection key={key}>
              {part.split("<br />").map((subpart) => (
                <React.Fragment key={subpart}>
                  {subpart} <br />
                </React.Fragment>
              ))}
            </BodyTextSection>
          )
        }

        if (part.includes("<ImgSection")) {
          part = part.replace("<ImgSection src=", "").replace("/>", "").replaceAll('"', "").trimStart().trimEnd()
          return <ImgSection key={key} src={part} />
        } else {
          //if (part.includes("<HeadingSection>"))
          part = part.replace("<HeadingSection>", "").replace("</HeadingSection>", "").trimStart().trimEnd()
          return (
            <HeadingSection key={key}>
              {part.split("<br />").map((subpart) => (
                <React.Fragment key={subpart}>
                  {subpart}
                  <br />
                </React.Fragment>
              ))}
            </HeadingSection>
          )
        }
      })}
    </>
  )
}

export default ArticleTxtToComponents
