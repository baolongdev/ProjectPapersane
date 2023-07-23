import { Box, Typography } from "@mui/material"

interface Prop {
  title: string
  BookSliderComponent: React.ReactNode
}

const BookSliderBox = ({ title, BookSliderComponent }: Prop) => {
  return (
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
        {title}
      </Typography>

      {BookSliderComponent}
    </Box>
  )
}

export default BookSliderBox
