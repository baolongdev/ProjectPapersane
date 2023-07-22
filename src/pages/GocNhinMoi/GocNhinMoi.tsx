import React, { useEffect, useState } from "react"
import { Typography, Box, Hidden } from "@mui/material"
import Header from "../../Bookflix-Components/Header/Header"
import PostPreviewCard from "./components/PostPreviewCard/PostPreviewCard"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import getGocNhinMoiArticleIds from "../../store/getGocNhinMoiArticleIds"
import readJsonFile from "../../store/readJsonFile"

function GocNhinMoi() {
  const articleIds = getGocNhinMoiArticleIds()

  const [articles_stringified, setArticles_stringified] = useState<Set<string>>(new Set())

  const fetchArticles = async () => {
    articleIds.map(async (id) => {
      const infoJson = await readJsonFile(`/GocNhinMoi-articles/${id}/info.json`)
      const imageURL = `/GocNhinMoi-articles/${id}/images/articleCover.jpg`
      const thisArticle = {
        id: id,
        title: infoJson["title"],
        author: infoJson["author"],
        description: infoJson["description"],
        imageURL: imageURL,
      }
      setArticles_stringified((oldSet) => new Set([...oldSet, JSON.stringify(thisArticle)]))
    })
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <Box bgcolor="var(--bookflix-background)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="GocNhinMoi" />

      <Typography
        variant="h1"
        align="center"
        fontFamily="var(--body-font-bookflix)"
        color="rgb(232, 129, 119)"
        fontWeight="bold"
        mt={5}
        fontSize={{ xs: 30, sm: 50 }}
      >
        <AutoAwesomeIcon sx={{ color: "yellow", fontSize: { xs: 25, sm: 45 } }} />
        {" GÓC NHÌN MỚI"}
      </Typography>

      <Box display="flex" gap={10} justifyContent="center" mx={2}>
        <Box flexBasis={{ xs: "100%", md: "60%" }}>
          {[...articles_stringified].map((post) => (
            <PostPreviewCard postInfo={JSON.parse(post)} key={JSON.parse(post).id} />
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
