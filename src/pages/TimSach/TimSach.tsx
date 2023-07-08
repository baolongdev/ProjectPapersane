import React, { Fragment, useState } from "react"
//import "./Bookflix.css"

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Box,
  Stack,
  Card,
  CardMedia,
  CardContent,
  InputAdornment,
  Rating,
  Drawer,
  Hidden,
} from "@mui/material"

import Header from "../../Bookflix-Components/Header/Header"

import BookCardResult from "./components/BookCardResult"

import { Link } from "react-router-dom"

import SearchIcon from "@mui/icons-material/Search"

import IconButton from "@mui/material/IconButton"

import TuneIcon from "@mui/icons-material/Tune"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import { styled } from "@mui/system"

function TimSach() {
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)

  const exampleBookSearchResult = [
    {
      title: "Harry Potter and the Chamber of Secrets (Harry Potter, #69)",
      author: "J.K. Rowling",
      rating: 4.5,
      bookCoverURL:
        "https://m.media-amazon.com/images/I/81THMAxo+pL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Ra Bờ Suối Ngắm Hoa Kèn Hồngggg",
      author: "Nguyễn Nhật Ánh",
      rating: 5,
      bookCoverURL:
        "https://images.baoquangnam.vn/Storage/NewsPortal/2022/1/15/122456/TNB-49812-01.jpg",
    },
  ]

  return (
    <Box bgcolor="rgb(249, 243, 238)" height="100vh" width="100vw">
      <Header activePage="TimSach" />

      <Box display="flex" justifyContent="space-evenly" mt={10}>
        <Box flexBasis={{ xs: "90%", md: "60%" }}>
          <TextField
            fullWidth
            label="Gõ tên sách"
            variant="outlined"
            InputLabelProps={{
              sx: { fontFamily: "Barlow, sans-serif" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Hidden mdUp>
                    <IconButton onClick={() => setIsFilterDrawerOpen(true)}>
                      <TuneIcon />
                    </IconButton>
                  </Hidden>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                backgroundColor: "white",
                "& fieldset": {
                  borderColor: "rgb(47, 62, 116)",
                  borderWidth: "2px",
                },
                "&:hover fieldset": {
                  borderColor: "rgb(47, 62, 116)",
                  borderWidth: "2px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgb(47, 62, 116)",
                  borderWidth: "2px",
                },
              },
              "& label.Mui-focused": {
                color: "rgb(47, 62, 116)",
              },
            }}
          />

          {exampleBookSearchResult.map((bookResult) => (
            <BookCardResult bookInfo={bookResult} />
          ))}
        </Box>

        <Box flexBasis="20%" display={{ xs: "none", md: "block" }}>
          <Typography
            variant="h4"
            sx={{
              color: "rgb(47, 62, 116)",
              fontWeight: "bold",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            THỂ LOẠI
          </Typography>

          <Box bgcolor="rgb(174, 170, 166)" height={4} my={3}></Box>

          <TextField
            placeholder="Viết các thể loại bạn muốn tìm, ngăn cách dấu phẩy. Ví dụ: Lãng mạn, Bí ẩn, Trinh thám"
            multiline
            fullWidth
            rows={30}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          ></TextField>
        </Box>
      </Box>

      <Drawer
        anchor="bottom"
        open={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        PaperProps={{
          sx: { bgcolor: "var(--bookflix-background)" },
        }}
      >
        <Box p={3} bgcolor="rgb(249, 243, 238)">
          <Typography
            variant="h4"
            sx={{
              color: "rgb(47, 62, 116)",
              fontWeight: "bold",
              fontFamily: "Barlow, sans-serif",
            }}
          >
            THỂ LOẠI
          </Typography>

          <Box bgcolor="rgb(174, 170, 166)" height={4} my={3}></Box>

          <TextField
            placeholder="Viết các thể loại bạn muốn tìm, ngăn cách dấu phẩy. Ví dụ: Lãng mạn, Bí ẩn, Trinh thám"
            multiline
            fullWidth
            rows={10}
            sx={{
              bgcolor: "white",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          ></TextField>
        </Box>
      </Drawer>
    </Box>
  )
}

export default TimSach
