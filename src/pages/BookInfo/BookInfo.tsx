import { Box, Button, Grid, Rating, Typography } from "@mui/material"
import Header from "../../Bookflix-Components/Header/Header"
import { useParams } from "react-router-dom"
import { Notfound } from "../../pages"

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

import getSearchableBookIds from "../../store/getSearchableBookIds"

import { useState, useEffect } from "react"

import readTextFile from "../../store/readTextFile"

const BookInfo = () => {
  const searchableBookIds = getSearchableBookIds()
  const { bookId } = useParams()

  if (!searchableBookIds.includes(bookId as string)) {
    return <Notfound />
  }

  const [bookTitle, setBookTitle] = useState("")
  const [bookAuthor, setBookAuthor] = useState("")
  const [bookReviewParagraphs, setBookReviewParagraphs] = useState<string[]>([])
  const [bookGenres, setBookGenres] = useState<string[]>([])
  const [bookRating, setBookRating] = useState(0.0)

  useEffect(() => {
    readTextFile(`/bookflix-searchable-book-info/${bookId}/title.txt`).then(
      (data) => setBookTitle(data.toUpperCase())
    )
    readTextFile(`/bookflix-searchable-book-info/${bookId}/review.txt`).then(
      (data) => {
        // Split with all kinds of "newline" character (according to ChatGPT, there are many, like \r \n idk)
        setBookReviewParagraphs(data.split(/\r\n|\r|\n/g))
      }
    )
    readTextFile(`/bookflix-searchable-book-info/${bookId}/genres.txt`).then(
      (data) => {
        setBookGenres(
          data.split(",").map((item) => {
            const firstLetter = item.charAt(0).toUpperCase()
            const restOfString = item.slice(1).toLowerCase()
            return firstLetter + restOfString
          })
        )
      }
    )
    readTextFile(`/bookflix-searchable-book-info/${bookId}/author.txt`).then(
      (data) => setBookAuthor(data)
    )
    readTextFile(`/bookflix-searchable-book-info/${bookId}/rating.txt`).then(
      (data) => setBookRating(data ? parseFloat(data) : 0.0)
    )
  }, [])

  return (
    <Box bgcolor="rgb(249, 243, 238)" height="100%" width="100%">
      <Header activePage="TimSach" />

      <Button
        onClick={() => window.history.back()}
        sx={{
          ml: 10,
          mt: 2,
          fontFamily: "Barlow, sans-serif",
          color: "rgb(47, 62, 116)",
          fontSize: 30,
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ color: "black", fontSize: 20 }} />
        Trở lại
      </Button>

      <Box mx={{ xs: 1, sm: 3, md: 3, lg: 10, xl: 30 }} mt={10}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {/* Book cover */}
          <Grid item xs={10} md={3}>
            <img src={`/bookflix-searchable-book-info/${bookId}/cover.png`} />
          </Grid>

          <Grid
            container
            item
            direction="column"
            xs={12}
            md={9}
            mt={{ xs: 5, md: 0 }}
            alignSelf="center"
            rowSpacing={{ xs: 2, sm: 1, md: 2, lg: 3 }}
          >
            {/* Book title */}
            <Grid item alignSelf="center">
              <Typography
                variant="h3"
                fontSize={{ xs: 40, lg: 45, xl: 50 }}
                fontFamily="Barlow, serif"
                fontWeight="bold"
                color="rgb(47, 62, 116)"
                align="center"
              >
                {bookTitle}
              </Typography>
            </Grid>

            {/* Book author */}
            <Grid item alignSelf={{ xs: "flex-start", sm: "center" }}>
              <Typography
                variant="h5"
                color="black"
                fontFamily="Barlow, serif"
                fontSize={{ sm: 20, md: 25 }}
              >
                <span style={{ fontWeight: "bold" }}>Tác giả: </span>
                {bookAuthor}
              </Typography>
            </Grid>

            {/* Book publish date */}
            <Grid item alignSelf={{ xs: "flex-start", sm: "center" }}>
              <Typography
                variant="h5"
                color="black"
                fontFamily="Barlow, serif"
                fontSize={{ sm: 20, md: 25 }}
              >
                <span style={{ fontWeight: "bold" }}>Ngày phát hành: </span>{" "}
                19/19/2019
              </Typography>
            </Grid>

            {/* Book genre */}
            <Grid item mt={5} ml={{ xs: 1, md: 10 }}>
              <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "rgb(184, 88, 91)", fontWeight: "bold" }}
                  fontSize={{ md: 25, lg: 35 }}
                >
                  Thể loại:
                </Typography>

                {bookGenres.map((genre) => (
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Barlow, serif",
                      border: "1px solid rgb(132, 163, 219)",
                      borderRadius: 20,
                      px: 2,
                      py: 1,
                      bgcolor: "rgb(132, 163, 219)",
                      color: "white",
                    }}
                    align="center"
                    fontSize={{ md: 20, lg: 20 }}
                  >
                    {genre}
                  </Typography>
                ))}
              </Box>
            </Grid>

            {/* Book rating */}
            <Grid item ml={{ xs: 1, md: 10 }}>
              <Box display="flex" alignItems="center" gap={2} mt={3}>
                <Typography
                  variant="h5"
                  fontFamily="Barlow, serif"
                  fontStyle="italic"
                  color="black"
                  fontSize={{ md: 25, lg: 30 }}
                >
                  Đánh giá:{" "}
                </Typography>
                <Rating
                  value={bookRating}
                  precision={0.25}
                  readOnly
                  sx={{ fontSize: { md: 30, lg: 40 } }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Book review */}
        <Box
          display="flex"
          justifyContent="flex-start"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
          gap={5}
          mt={10}
          border="4px solid black"
          borderRadius={5}
          p={5}
          bgcolor="white"
        >
          <Box minWidth={{ xs: 200 }} maxWidth={{ xs: 100, md: 200 }}>
            <img src="\bookflix-ui-pics\SummaryIcon.png" />
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              color="black"
              fontFamily="Playfair Display, serif"
              fontSize={{ xs: 15, sm: 15, md: 18, lg: 22 }}
            >
              {bookReviewParagraphs.map((para) => (
                <>
                  {para} <br /> <br />{" "}
                </>
              ))}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BookInfo
