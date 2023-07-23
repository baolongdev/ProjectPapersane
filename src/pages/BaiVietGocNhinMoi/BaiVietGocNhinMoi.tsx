import React, { useEffect, useState, useRef } from "react"
import { Typography, Button, Box } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import Header from "../../Bookflix-Components/Header/Header"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import readJsonFile from "../../store/readJsonFile"

import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import readTextFile from "../../store/readTextFile"
import ArticleTxtToComponents from "./components/ArticleTxtToComponents"
import calcLerp from "../../store/calcLerp"

gsap.registerPlugin(ScrollTrigger)

function BaiVietGocNhinMoi() {
  const { articleId } = useParams()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [articleTitle, setArticleTitle] = useState("")
  const [articleAuthor, setArticleAuthor] = useState("")
  const [articlePublishDate, setArticlePublishDate] = useState("")
  const [articleAvatarURL, setArticleAvatarURL] = useState("")
  const [articleParts, setArticleParts] = useState<string[]>([])

  const boxNeedsPinning = useRef(null)

  // screen resize listener for collecting screen width
  useEffect(() => {
    // Update the screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  // fetch data
  useEffect(() => {
    readJsonFile(`/GocNhinMoi-articles/${articleId}/info.json`).then((data) => {
      setArticleTitle(data["title"])
      setArticleAuthor(data["author"])
      const publishDateSplitted = data["publishdate"].split("-")
      setArticlePublishDate(`${publishDateSplitted[2]}/${publishDateSplitted[1]}/${publishDateSplitted[0]}`)
    })
    readTextFile(`/GocNhinMoi-articles/${articleId}/Article.txt`).then((data) => {
      setArticleParts(data.split(/\r?\n/).filter((str) => str.length > 0))
    })
    setArticleAvatarURL(`/GocNhinMoi-articles/${articleId}/images/articleCover.jpg`)
  }, [])

  // scrolltrigger to make góc nhìn mới stay pin
  useEffect(() => {
    let mm = gsap.matchMedia()
    mm.add("(min-width: 900px)", () => {
      gsap.to(boxNeedsPinning.current, {
        scrollTrigger: {
          trigger: boxNeedsPinning.current,
          //markers: true,
          start: "top 10px",
          pin: true,
          pinSpacing: false,
        },
      })
    })

    return () => mm.revert()
  })

  return (
    <Box bgcolor="var(--bookflix-background)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="GocNhinMoi" />

      <Box
        sx={{
          display: "flex",
          gap: 7,
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          mt: { xs: 2, md: 7 },
          mx: 2,
        }}
      >
        <Box ref={boxNeedsPinning} flexBasis={{ xs: "auto", md: "20%" }}>
          <Button
            component={Link}
            to="/bookflix/gocnhinmoi"
            sx={{
              fontFamily: "var(--body-font-bookflix)",
              color: "rgb(232, 129, 119)",
              fontWeight: "bold",
              fontSize: { xs: 30, md: calcLerp(900, 17, 1200, 25)(screenWidth), xl: 35 },
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" sx={{ mr: 1 }} />
            GÓC NHÌN MỚI
          </Button>
          <Box mt={{ xs: "50px", md: "10px" }} mx="auto" width={{ xs: "auto", sm: "calc(100vw - 200px)", md: "auto" }}>
            <img
              src={articleAvatarURL}
              style={{
                borderRadius: "0 30px 0 0",
                border: "10px solid rgb(232, 233, 219)",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ flexBasis: { xs: "auto", md: "70%" } }}>
          <Typography variant="h3" fontFamily="var(--body-font-bookflix)" fontStyle="italic" fontWeight="bold" fontSize={{ xs: 40, md: 50 }}>
            {articleTitle}
          </Typography>
          <Typography variant="h6" fontFamily="var(--body-font-bookflix)" fontWeight="normal">
            {`Đăng bởi ${articleAuthor} vào ${articlePublishDate}`}
          </Typography>

          <Box bgcolor="rgb(174, 170, 166)" height={4} my={3}></Box>

          <Box bgcolor=" white" p={3} display="flex" flexDirection="column" gap={3}>
            <ArticleTxtToComponents articleParts={articleParts} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BaiVietGocNhinMoi
