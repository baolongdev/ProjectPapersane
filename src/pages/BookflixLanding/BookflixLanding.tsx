import React, { useEffect, useState } from "react"
import { Typography, Button, Box, Grid } from "@mui/material"
import Header from "../../Bookflix-Components/Header/Header"
import BookSlider from "./components/BookSlider/BookSlider"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"

import getBookIdsForSurpriseMeSwiper from "../../store/getBookIdsForSurpriseMeSwiper"
import getSearchableBookIds from "../../store/getSearchableBookIds"
import readTextFile from "../../store/readTextFile"
import getBookInfoForTopRatedSwiper from "../../store/getBookInfoForTopRatedSwiper"
import getArticleInfoForRecommendedForYou from "../../store/getArticleInfoForRecommendedForYou"
import BookSliderBox from "./components/BookSliderBox/BookSliderBox"

function BookflixLanding() {
  const allBookIds = getSearchableBookIds()
  const bookIdsSurpriseMe = getBookIdsForSurpriseMeSwiper()
  const bookCoversSurpriseMe = bookIdsSurpriseMe.map((id) => `/bookflix-searchable-book-info/${id}/cover.png`)

  const [quoteTxtLines, setQuoteTxtLines] = useState<string[]>([])

  useEffect(() => {
    readTextFile(`/bookflix-others/quotes.txt`).then((data) => {
      setQuoteTxtLines(data.split("\n"))
    })
  }, [])

  const date0 = new Date(2023, 6, 13)
  const daysSinceDate0 = new Date().getDate() - date0.getDate()
  const quoteIdx = daysSinceDate0 % 100

  const TopRatedBookInfo = getBookInfoForTopRatedSwiper()
  const RecommendedArticles = getArticleInfoForRecommendedForYou()

  return (
    <Box bgcolor="var(--bookflix-background)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="TrangChu" />

      <Grid container columns={24} justifyContent="center" spacing={10}>
        <Grid item xs={22} sm={22} md={14} lg={10} alignSelf="center">
          <Typography
            variant="h4"
            align="center"
            fontFamily="var(--review-font-bookflix)"
            color="black"
            bgcolor="white"
            borderRadius="30px"
            p={5}
            mt={5}
            fontSize={{xs: 35, md: "3vw" ,lg: "2.41vw"}}
          >
            Yêu sách từ đầu sao thật khó
            <br />
            Đừng từ bỏ, có Bookflix lo!
          </Typography>
        </Grid>

        <Grid item xs={15} sm={15} md={8} lg={6} mt={10}>
          <Swiper slidesPerView={1} loop autoplay={{ delay: 2500 }} modules={[Autoplay]} noSwiping={true} noSwipingClass="swiper-slide">
            {bookCoversSurpriseMe.map((bookCoverURL) => (
              <SwiperSlide key={bookCoverURL}>
                <img
                  src={bookCoverURL}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button
            fullWidth
            onClick={() => {
              const randomId = allBookIds[Math.floor(Math.random() * allBookIds.length)]
              window.open(`/bookflix/bookinfo/${randomId}`, "_blank")
            }}
            sx={{
              mt: 1,
              bgcolor: "rgb(250, 222, 220)",
              color: "rgb(184, 88, 91)",
              borderRadius: 20,
              fontFamily: "var(--body-font-bookflix)",
              fontWeight: "bold",
              fontSize: "1rem",
              "&:hover": {
                bgcolor: "rgb(250, 222, 220)",
              },
            }}
          >
            Surprise me!
          </Button>
        </Grid>
      </Grid>

      <BookSliderBox title="Top rated" BookSliderComponent={<BookSlider booksInfo={TopRatedBookInfo} cardColor="rgb(204, 223, 230)" />} />

      <BookSliderBox title="Recommended for you" BookSliderComponent={<BookSlider booksInfo={RecommendedArticles} cardColor="rgb(210, 239, 173)" />} />

      <Typography
        variant="h3"
        align="center"
        mt={10}
        color="var(--bookflix-logo-color)"
        fontFamily="var(--body-font-bookflix)"
        fontWeight="bold"
        fontSize={{ xs: 30, sm: 35, md: 50 }}
      >
        QUOTE OF THE DAY
      </Typography>

      <Box display="flex" justifyContent="space-evenly" alignItems="center" mt={5}>
        <Typography
          variant="h5"
          align="center"
          fontFamily="var(--body-font-bookflix)"
          fontStyle="italic"
          border="3px solid rgb(48, 48, 48)"
          bgcolor="white"
          color="black"
          borderRadius="30px"
          p={5}
          mb={5}
          mx={2}
          fontSize={{ xs: 20, lg: 25 }}
        >
          {quoteTxtLines[quoteIdx * 2]}
          <br />
          {`- ${quoteTxtLines[quoteIdx * 2 + 1]}`}
        </Typography>
      </Box>
    </Box>
  )
}

export default BookflixLanding
