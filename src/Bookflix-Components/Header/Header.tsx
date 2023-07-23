import { AppBar, Toolbar, Typography, IconButton, Box, Drawer } from "@mui/material"
import HeaderButton from "./components/HeaderButton/HeaderButton"
import DehazeIcon from "@mui/icons-material/Dehaze"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

import { useState } from "react"
import TextFieldForBookSearch from "./components/TextFieldForBookSearch/TextFieldForBookSearch"

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
            color: "var(--bookflix-logo-color)",
            fontFamily: "var(--body-font-bookflix)",
            ml: 3,
            fontSize: { xs: 30, sm: 50 },
          }}
        >
          BOOKFLIX
        </Typography>

        <Box display={{ xs: "none", lg: "flex", alignItems: "center" }} gap={{ lg: 3, xl: 5 }} mr={5}>
          <HeaderButton buttonText="Trang Chủ" buttonLink="/bookflix" isActivePage={activePage === "TrangChu"} />
          <HeaderButton buttonText="Tìm sách" buttonLink="/bookflix/timsach" isActivePage={activePage === "TimSach"} />
          <HeaderButton buttonText="Góc nhìn mới" buttonLink="/bookflix/gocnhinmoi" isActivePage={activePage === "GocNhinMoi"} />
          <TextFieldForBookSearch setBookSearchValue={setBookSearchValue} bookSearchValue={bookSearchValue} />
        </Box>

        <IconButton sx={{ display: { xs: "block", lg: "none" } }} onClick={() => setIsHeaderDrawerOpen(true)}>
          <DehazeIcon fontSize="large" />
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
        <Box p={5} display="flex" flexDirection="column" gap={3} alignItems="center">
          <HeaderButton buttonText="Trang Chủ" buttonLink="/bookflix" isActivePage={activePage === "TrangChu"} />
          <HeaderButton buttonText="Tìm sách" buttonLink="/bookflix/timsach" isActivePage={activePage === "TimSach"} />
          <HeaderButton buttonText="Góc nhìn mới" buttonLink="/bookflix/gocnhinmoi" isActivePage={activePage === "GocNhinMoi"} />
          <TextFieldForBookSearch setBookSearchValue={setBookSearchValue} bookSearchValue={bookSearchValue} />
          <IconButton onClick={() => setIsHeaderDrawerOpen(false)}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Header
