import React, { useEffect, useState, Suspense, lazy } from "react"
import { Typography, Button, Box } from "@mui/material"
import { Link, useParams } from "react-router-dom"
import Header from "../../Bookflix-Components/Header/Header"
import ShareIcon from "@mui/icons-material/Share"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import readTextFile from "../../store/readTextFile"

function BaiVietGocNhinMoi() {
  const { articleId } = useParams()
  const [articleTitle, setArticleTitle] = useState("")
  const [articleAuthor, setArticleAuthor] = useState("")
  const [articlePublishDate, setArticlePublishDate] = useState("")
  const [articleAvatarURL, setArticleAvatarURL] = useState("")
  // "lazy()" is made to load components dynamically, it seems
  const ArticleComponent = lazy(() => import(`../../../public/GocNhinMoi-articles/${articleId}/Article.tsx`))

  useEffect(() => {
    readTextFile(`/GocNhinMoi-articles/${articleId}/title.txt`).then((data) => setArticleTitle(data))
    readTextFile(`/GocNhinMoi-articles/${articleId}/author.txt`).then((data) => setArticleAuthor(data))
    readTextFile(`/GocNhinMoi-articles/${articleId}/publishdate.txt`).then((data) => setArticlePublishDate(data))
    setArticleAvatarURL(`/GocNhinMoi-articles/${articleId}/images/articleCover.jpg`)
  }, [])

  return (
    <Box bgcolor="rgb(249, 243, 238)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="GocNhinMoi" />

      <Box
        sx={{
          display: "flex",
          gap: 7,
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          mt: 10,
          mx: 2,
        }}
      >
        <Box sx={{ flexBasis: { xs: "auto", md: "20%" } }}>
          <Button
            component={Link}
            to="/bookflix/gocnhinmoi"
            sx={{
              fontFamily: "Barlow, sans-serif",
              color: "rgb(232, 129, 119)",
              fontWeight: "bold",
              fontSize: 30,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <ArrowBackIosNewIcon />
            GÓC NHÌN MỚI
          </Button>
          <img
            src={articleAvatarURL}
            style={{
              marginTop: 10,
              borderRadius: "0 30px 0 0",
              border: "10px solid rgb(232, 233, 219)",
            }}
          />

          <Box sx={{ display: "flex", gap: 5, justifyContent: "center", mt: 5 }}>
            <FavoriteIcon fontSize="large" />
            <ShareIcon fontSize="large" />
          </Box>
        </Box>

        <Box sx={{ flexBasis: { xs: "auto", md: "70%" } }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Barlow, sans-serif",
              fontStyle: "italic",
              fontWeight: "bold",
              fontSize: { xs: 40, md: 50 },
            }}
          >
            {articleTitle}
          </Typography>
          <Typography variant="h6" sx={{ fontFamily: "Barlow, sans-serif", fontWeight: "normal" }}>
            {`Đăng bởi ${articleAuthor} vào ${articlePublishDate}`}
          </Typography>

          <Box sx={{ bgcolor: "rgb(174, 170, 166)", height: 4, my: 3 }}></Box>

          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Suspense>
              <ArticleComponent />
            </Suspense>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BaiVietGocNhinMoi
