import { Typography, Box, Hidden } from "@mui/material"

// Import Swiper styles
import "swiper/css"

import PostPreviewCard from "./components/PostPreviewCard/PostPreviewCard"

import Header from "../../Bookflix-Components/Header/Header"

function GocNhinMoi() {
  const examplePosts = [
    {
      title: "Chiều sâu của tác phẩm Nguyễn Nhật Ánh",
      author: "Thomas Edison",
      description: "Nguyễn Nhật Ánh pro hơn chúng ta nghĩ...",
      imageURL:
        "https://nld.mediacdn.vn/291774122806476800/2021/4/8/can-anh-nguyen-nhat-anh-161786279961226510709.jpg",
    },
    {
      title: "Độ dày cuốn sách và thời gian đọc sách",
      author: "Trông Anh Ngược",
      description: "Sách càng dày, đọc mới càng nhanh",
      imageURL:
        "https://c2thanglong.edu.vn/wp-content/uploads/2023/05/Trong-Anh-Nguoc-La-Gi-Nguoi-Nam-Giu-Bi-Thuat-Flexing-4.jpg",
    },
  ]

  return (
    <Box bgcolor="rgb(249, 243, 238)" height="2000px" width="100%">
      <Header activePage="GocNhinMoi" />

      <Typography
        variant="h1"
        align="center"
        sx={{
          fontFamily: "Barlow, sans-serif",
          color: "rgb(232, 129, 119)",
          fontWeight: "bold",
          marginTop: 5,
          fontSize: 50,
        }}
      >
        GÓC NHÌN MỚI
      </Typography>

      <Box display="flex" gap={10} justifyContent="center" mx={2}>
        <Box flexBasis={{ xs: "100%", md: "60%" }}>
          {examplePosts.map((post) => (
            <PostPreviewCard postInfo={post} />
          ))}
        </Box>

        <Hidden mdDown>
          <Box
            flexBasis="30%"
            alignSelf="flex-start"
            justifyContent="flex-end"
            display="flex"
          >
            <Box>
              <img src="..\..\..\public\bookflix-ui-pics\FillerPic_GocNhinMoi.png" />
            </Box>
          </Box>
        </Hidden>
      </Box>
    </Box>
  )
}

export default GocNhinMoi
