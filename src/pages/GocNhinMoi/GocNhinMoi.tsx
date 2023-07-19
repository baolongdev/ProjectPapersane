import React, { useEffect, useState } from "react"
import { Typography, Box, Hidden } from "@mui/material"
import Header from "../../Bookflix-Components/Header/Header"
import PostPreviewCard from "./components/PostPreviewCard/PostPreviewCard"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import getGocNhinMoiArticleIds from "../../store/getGocNhinMoiArticleIds"
import readTextFile from "../../store/readTextFile"

interface ArticleInfo {
  id: string
  title: string
  author: string
  description: string
  imageURL: string
}

function GocNhinMoi() {
  const articleIds = getGocNhinMoiArticleIds()

  const [articles_stringified, setArticles_stringified] = useState<Set<string>>(new Set())

  const fetchArticles = async () => {
    const articleData = await Promise.all(
      articleIds.map(async (id) => {
        const title = await readTextFile(`/GocNhinMoi-articles/${id}/title.txt`)
        const author = await readTextFile(`/GocNhinMoi-articles/${id}/author.txt`)
        const description = await readTextFile(`/GocNhinMoi-articles/${id}/description.txt`)
        const imageURL = `/GocNhinMoi-articles/${id}/images/articleCover.jpg`

        const thisArticle = {
          id: id,
          title: title,
          author: author,
          description: description,
          imageURL: imageURL,
        }

        setArticles_stringified((oldSet) => new Set([...oldSet, JSON.stringify(thisArticle)]))
      })
    )
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Box bgcolor="rgb(249, 243, 238)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="GocNhinMoi" />

      <Typography
        variant="h1"
        align="center"
        sx={{
          fontFamily: "Barlow, sans-serif",
          color: "rgb(232, 129, 119)",
          fontWeight: "bold",
          marginTop: 5,
          fontSize: { xs: 30, sm: 50 },
        }}
      >
        <AutoAwesomeIcon sx={{ color: "yellow", fontSize: { xs: 25, sm: 45 } }} />
        {" GÓC NHÌN MỚI"}
      </Typography>

      <Box display="flex" gap={10} justifyContent="center" mx={2}>
        <Box flexBasis={{ xs: "100%", md: "60%" }}>
          {[...articles_stringified].map((post) => (
            <PostPreviewCard postInfo={JSON.parse(post)} />
          ))}
        </Box>

        <Hidden mdDown>
          <Box flexBasis="30%" alignSelf="flex-start" justifyContent="flex-end" display="flex">
            <Box>
              <img src="/bookflix-ui-pics/FillerPic_GocNhinMoi.png" />
            </Box>
          </Box>
        </Hidden>
      </Box>
    </Box>
  )
}

export default GocNhinMoi
