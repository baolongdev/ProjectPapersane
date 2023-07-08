import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

interface postInfoProp {
  title: string
  author: string
  description: string
  imageURL: string
}

const PostPreviewCard = ({ postInfo }: { postInfo: postInfoProp }) => {
  return (
    <Card
      sx={{
        display: "flex",
        boxShadow: "none",
        border: "1px solid rgb(153, 153, 153)",
        borderRadius: 0,
        marginTop: 5,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 150, objectFit: "cover" }}
        image={postInfo.imageURL}
        alt="Image"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontStyle: "italic" }}>
          {postInfo.title}
        </Typography>
        <Typography variant="subtitle1" component="div" color="text.secondary">
          bởi {postInfo.author}
        </Typography>
        <Typography variant="body2" component="div" sx={{ mb: 2 }}>
          {postInfo.description}
        </Typography>
        <Button
          component={Link}
          to="/bookflix/baiviet"
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "rgb(224, 143, 120)",
            borderRadius: "20px 0 0 20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgb(224, 143, 120)",
              boxShadow: "none",
            },
          }}
        >
          Read Now
        </Button>
      </CardContent>
    </Card>
  )
}

export default PostPreviewCard
