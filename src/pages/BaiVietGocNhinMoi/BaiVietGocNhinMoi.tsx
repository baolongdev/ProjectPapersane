import React, { Fragment } from "react"

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
} from "@mui/material"

import Header from '../../Bookflix-Components/Header/Header'

import { Link } from "react-router-dom"

import SearchIcon from "@mui/icons-material/Search"

import ShareIcon from "@mui/icons-material/Share"

import FavoriteIcon from "@mui/icons-material/Favorite"

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

function BaiVietGocNhinMoi() {
  return (
    <Box sx={{ backgroundColor: "rgb(249, 243, 238)" }}>
      <Header activePage="GocNhinMoi" />

      <Box
        sx={{
          display: "flex",
          gap: 7,
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
        <Box sx={{ flexBasis: "20%", minWidth: 300 }}>
          <Button
            sx={{
              fontFamily: "Barlow, sans-serif",
              color: "rgb(232, 129, 119)",
              fontWeight: "bold",
              fontSize: 30,
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <ArrowBackIosNewIcon />
            GÓC NHÌN MỚI
          </Button>
          <img
            src="https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg"
            style={{
              marginTop: 10,
              borderRadius: "0 30px 0 0",
              border: "10px solid rgb(232, 233, 219)",
            }}
          />

          <Box
            sx={{ display: "flex", gap: 5, justifyContent: "center", mt: 5 }}
          >
            <FavoriteIcon fontSize="large" />
            <ShareIcon fontSize="large" />
          </Box>
        </Box>

        <Box sx={{ flexBasis: "60%", minWidth: 350 }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Barlow, sans-serif",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Bài viết 1
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Barlow, sans-serif", fontWeight: "normal" }}
          >
            Đăng bởi Thomas Edison vào 31/5/2023
          </Typography>

          <Box sx={{ bgcolor: "rgb(174, 170, 166)", height: 4, my: 3 }}></Box>

          <Box
            sx={{
              bgcolor: "white",
              p: 3,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Typography variant="subtitle1">
              Sample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample text
            </Typography>
            <img
              src="https://www.hindustantimes.com/ht-img/img/2023/02/20/1600x900/minecraft_1676880562368_1676880570924_1676880570924.jpg"
              style={{ maxWidth: "70%", minWidth: 300, alignSelf: "center" }}
            />
            <Typography variant="subtitle1">
              Sample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample textSample
              textSample textSample textSample textSample textSample text
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  )
}

export default BaiVietGocNhinMoi
