import Header from "../../Bookflix-Components/Header/Header"

import { Typography, Button, Box, Grid } from "@mui/material"

import BookSlider from "./components/BookSlider/BookSlider"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// import required modules
import { Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

import getBookIdsForSurpriseMeSwiper from "../../store/getBookIdsForSurpriseMeSwiper"

import getSearchableBookIds from "../../store/getSearchableBookIds"
import { useEffect, useState } from "react"
import readTextFile from "../../store/readTextFile"

function BookflixLanding() {
  const allBookIds = getSearchableBookIds()

  const bookIdsSurpriseMe = getBookIdsForSurpriseMeSwiper()

  const bookCoversSurpriseMe = bookIdsSurpriseMe.map(
    (id) => `/bookflix-searchable-book-info/${id}/cover.png`
  )

  const [quoteTxtLines, setQuoteTxtLines] = useState<string[]>([])

  useEffect(() => {
    readTextFile(`/bookflix-others/quotes.txt`).then((data) => {
      // once again, the strange parameters for split() is what ChatGPT said is needed for splitting based on new lines
      setQuoteTxtLines(data.split(/\r\n|\r|\n/g))
    })
  }, [])

  const date0 = new Date("2023-07-13")
  const daysSinceDate0 = new Date().getDate() - date0.getDate()
  const quoteIndex = daysSinceDate0 % 100

  const booksNewRelease = [
    {
      title: "Book 1",
      author: "Author 1",
      imageUrl:
        "https://pm1.aminoapps.com/7577/7bb6da4a6a80790aff0186e7cf156798315f355ar1-1357-2048v2_uhq.jpg",
    },
    {
      title: "Book 2",
      author: "Author 2",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 3",
      author: "Author 3",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 4",
      author: "Author 4",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 5",
      author: "Author 5",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 6",
      author: "Author 6",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 7",
      author: "Author 7",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 8",
      author: "Author 8",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 9",
      author: "Author 9",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 10",
      author: "Author 10",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 11",
      author: "Author 11",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    // Add more book objects here...
  ]

  const booksRecommended = [
    {
      title: "Book 1 recommended",
      author: "Author 1",
      imageUrl:
        "https://pm1.aminoapps.com/7577/7bb6da4a6a80790aff0186e7cf156798315f355ar1-1357-2048v2_uhq.jpg",
    },
    {
      title: "Book 2 recommended",
      author: "Author 2",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 3 recommended",
      author: "Author 3",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 4 recommended",
      author: "Author 4",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    {
      title: "Book 5 recommended",
      author: "Author 5",
      imageUrl: "https://cdn-amz.woka.io/images/I/710sLNJVC7L.jpg",
    },
    // Add more book objects here...
  ]

  return (
    <Box
      bgcolor="rgb(249, 243, 238)"
      minHeight="100vh"
      height="100%"
      minWidth="100vw"
      width="100%"
    >
      <Header activePage="TrangChu" />

      <Grid container columns={24} justifyContent="center" spacing={10}>
        <Grid item xs={22} sm={22} md={14} lg={10} alignSelf="center">
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontFamily: "var(--normal-font-bookflix)",
              color: "black",
              bgcolor: "white",
              borderRadius: "30px",
              p: 5,
              mt: 5,
              fontSize: { xs: 35, lg: 40 },
            }}
          >
            Yêu sách từ đầu sao thật khó<br></br>Đừng từ bỏ, có Bookflix lo!
          </Typography>
        </Grid>

        <Grid item xs={15} sm={15} md={8} lg={6} mt={10}>
          <Swiper
            slidesPerView={1}
            loop
            autoplay={{ delay: 2500 }}
            modules={[Autoplay]}
            noSwiping={true}
            noSwipingClass="swiper-slide"
          >
            {bookCoversSurpriseMe.map((bookCoverURL) => (
              <SwiperSlide>
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
              const randomId =
                allBookIds[Math.floor(Math.random() * allBookIds.length)]
              window.open(`/bookflix/bookinfo/${randomId}`, "_blank")
            }}
            sx={{
              mt: 1,
              bgcolor: "rgb(250, 222, 220)",
              color: "rgb(184, 88, 91)",
              borderRadius: 20,
              fontFamily: "Barlow, sans-serif",
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

      {/* <Box> for New release */}
      <Box p={2} ml={5} mr={5} mt={10}>
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            color: "black",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          New release
        </Typography>

        <BookSlider
          booksInfo={booksNewRelease}
          cardColor="rgb(204, 223, 230)"
        />
      </Box>

      {/* <Box> for Recommended for you */}
      <Box p={2} ml={5} mr={5} mt={7}>
        <Typography
          variant="h4"
          sx={{
            mb: 5,
            color: "black",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Recommended for you
        </Typography>

        <BookSlider
          booksInfo={booksRecommended}
          cardColor="RGB(210, 239, 173)"
        />
      </Box>

      <Typography
        variant="h3"
        align="center"
        sx={{
          mt: 10,
          color: "red",
          fontFamily: "Barlow",
          fontWeight: "bold",
          fontSize: { xs: 30, sm: 35, md: 50 },
        }}
      >
        QUOTE OF THE DAY
      </Typography>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        mt={5}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontFamily: "Barlow",
            fontStyle: "italic",
            border: "3px solid rgb(48, 48, 48)",
            backgroundColor: "white",
            color: "black",
            borderRadius: "30px",
            p: 5,
            mb: 5,
            mx: 2,
            fontSize: { xs: 20, lg: 25 },
          }}
        >
          {quoteTxtLines[quoteIndex * 2]}
          <br />
          {`- ${quoteTxtLines[quoteIndex * 2 + 1]}`}
        </Typography>
      </Box>
    </Box>
  )
}

export default BookflixLanding
