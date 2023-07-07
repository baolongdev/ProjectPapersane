import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material"
import React from "react"

interface Book {
  title: string
  author: string
  rating: number
  bookCoverURL: string
}

const BookCardResult = ({ bookInfo }: { bookInfo: Book }) => {
  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: "none",
        borderRadius: 0,
        marginTop: 5,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, objectFit: "cover" }}
        image={bookInfo.bookCoverURL}
        alt="Image"
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {bookInfo.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          bởi {bookInfo.author}
        </Typography>

        <Rating defaultValue={bookInfo.rating} precision={0.5} readOnly />

        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "rgb(224, 143, 120)",
            borderRadius: "20px 0 0 20px",
            boxShadow: "none",
            maxWidth: 200,
            mt: 3,
            "&:hover": {
              backgroundColor: "rgb(224, 143, 120)",
              boxShadow: "none",
            },
          }}
        >
          Tìm hiểu thêm
        </Button>
      </CardContent>
    </Card>
  )
}

export default BookCardResult
