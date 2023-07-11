import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Drawer,
} from "@mui/material"

import HeaderButton from "./components/HeaderButton/HeaderButton"

import SearchIcon from "@mui/icons-material/Search"

import DehazeIcon from "@mui/icons-material/Dehaze"

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import { useState } from "react"
import { Link } from "react-router-dom"

// Unfinished!
function Header({ activePage }: { activePage: string }) {
  const [bookSearchValue, setBookSearchValue] = useState("")
  const [isHeaderDrawerOpen, setIsHeaderDrawerOpen] = useState(false)

  return (
    <AppBar position="static" sx={{ bgcolor: "transparent" }}>
      <Toolbar sx={{ p: 2 }}>
        <Typography
          variant="h3"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "rgb(47, 62, 116)",
            fontFamily: "Barlow",
            ml: 3,
            fontSize: { xs: 30, sm: 50 },
          }}
        >
          BOOKFLIX
        </Typography>

        <Box display={{ xs: "none", xl: "block" }}>
          <HeaderButton
            buttonText="Trang Chủ"
            buttonLink="/bookflix"
            isActivePage={activePage === "TrangChu"}
          />
          <HeaderButton
            buttonText="Tìm sách"
            buttonLink="/bookflix/timsach"
            isActivePage={activePage === "TimSach"}
          />
          <HeaderButton
            buttonText="Góc nhìn mới"
            buttonLink="/bookflix/gocnhinmoi"
            isActivePage={activePage === "GocNhinMoi"}
          />

          <TextField
            label="Gõ tên sách"
            variant="outlined"
            onChange={(e) => setBookSearchValue(e.target.value)}
            InputLabelProps={{
              sx: { fontFamily: "Barlow" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton component={Link} to={`/bookflix/TimSach/${bookSearchValue}`}>
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
              mr: 10,
            }}
          />
        </Box>

        <IconButton sx={{ display: { xs: "block", xl: "none" } }}>
          <DehazeIcon
            fontSize="large"
            onClick={() => setIsHeaderDrawerOpen(true)}
          />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={isHeaderDrawerOpen}
        onClose={() => setIsHeaderDrawerOpen(false)}
        PaperProps={{
          sx: { bgcolor: "var(--bookflix-background)" },
        }}
      >
        <Box
          p={5}
          display="flex"
          flexDirection="column"
          gap={3}
          alignItems="center"
        >
          <HeaderButton
            buttonText="Trang Chủ"
            buttonLink="/bookflix"
            isActivePage={activePage === "TrangChu"}
          />
          <HeaderButton
            buttonText="Tìm sách"
            buttonLink="/bookflix/timsach"
            isActivePage={activePage === "TimSach"}
          />
          <HeaderButton
            buttonText="Góc nhìn mới"
            buttonLink="/bookflix/gocnhinmoi"
            isActivePage={activePage === "GocNhinMoi"}
          />

          <TextField
            label="Gõ tên sách"
            onChange={(e) => setBookSearchValue(e.target.value)}
            variant="outlined"
            InputLabelProps={{
              sx: { fontFamily: "Barlow" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton component={Link} to={`/bookflix/TimSach/${bookSearchValue}`}>
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
              mr: 10,
            }}
          />

          <IconButton onClick={() => setIsHeaderDrawerOpen(false)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
