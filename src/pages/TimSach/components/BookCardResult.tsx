import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Button,
} from "@mui/material"
import { Link } from "react-router-dom"

interface Book {
  id: string
  title: string
  author: string
  rating: number
  publishDate: Date
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
        sx={{ width: 150, objectFit: "contain" }}
        image={bookInfo.bookCoverURL}
        alt="Image"
      />
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h6"
          fontSize={{ xs: 15, lg: 20 }}
          fontWeight="bold"
          fontFamily="Barlow, serif"
        >
          {bookInfo.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          fontSize={{ xs: 13, lg: 15 }}
          fontFamily="Barlow, serif"
        >
          bởi {bookInfo.author}
        </Typography>

        <Rating
          defaultValue={bookInfo.rating}
          precision={0.5}
          readOnly
          sx={{
            fontSize: { xs: 15, sm: 20 },
          }}
        />

        <Button
          component={Link}
          to={`/bookflix/bookinfo/${bookInfo.id}`}
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "rgb(224, 143, 120)",
            borderRadius: "20px 0 0 20px",
            boxShadow: "none",
            maxWidth: 200,
            fontSize: { xs: 10, sm: 15 },
            fontFamily: "Barlow, serif",
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
