import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"

import {
  Typography,
  TextField,
  Box,
  InputAdornment,
  Drawer,
  Hidden,
} from "@mui/material"

import Header from "../../Bookflix-Components/Header/Header"

import BookCardResult from "./components/BookCardResult"

import SearchIcon from "@mui/icons-material/Search"

import IconButton from "@mui/material/IconButton"

import TuneIcon from "@mui/icons-material/Tune"

import getSearchableBookIds from "../../store/getSearchableBookIds"

import readTextFile from "../../store/readTextFile"

interface Book {
  id: string
  title: string
  author: string
  rating: number
  bookCoverURL: string
}

function TimSach() {
  const { searchQueryInURL } = useParams()
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [bookSearchValue, setBookSearchValue] = useState(
    searchQueryInURL ? searchQueryInURL : ""
  )
  const [genreSearchList, setGenreSearchList] = useState<string[]>([])
  const [bookSearchedInfo, setBookSearchedInfo] = useState<Book[]>([])

  const bookIdsList = getSearchableBookIds()

  useEffect(() => {
    async function updateBookSearchedInfo() {
      function includeAllGenres(genresList: string[]) {
        for (const genre of genreSearchList) {
          if (!genresList.includes(genre.toLowerCase())) {
            return false
          }
        }
        return true
      }

      var newBookSearchedInfo = []
      for (const thisId of bookIdsList) {
        const thisTitle = await readTextFile(
          `/bookflix-searchable-book-info/${thisId}/title.txt`
        )
        const thisGenres = (
          await readTextFile(
            `/bookflix-searchable-book-info/${thisId}/genres.txt`
          )
        )
          .split(",")
          .map((genre) => genre.toLowerCase())

        const thisAuthor = await readTextFile(
          `/bookflix-searchable-book-info/${thisId}/author.txt`
        )
        const thisRating = parseFloat(
          await readTextFile(
            `/bookflix-searchable-book-info/${thisId}/rating.txt`
          )
        )

        const thisCoverURL = `/bookflix-searchable-book-info/${thisId}/cover.png`

        if (
          thisTitle.toLowerCase().includes(bookSearchValue.toLowerCase()) &&
          includeAllGenres(thisGenres)
        ) {
          const thisBook: Book = {
            id: thisId,
            title: thisTitle,
            author: thisAuthor,
            rating: thisRating,
            bookCoverURL: thisCoverURL,
          }
          newBookSearchedInfo.push(thisBook)
        }
      }

      setBookSearchedInfo(newBookSearchedInfo)
    }

    updateBookSearchedInfo()
  }, [])

  async function updateBookSearchedInfo() {
    function includeAllGenres(genresList: string[]) {
      for (const genre of genreSearchList) {
        if (!genresList.includes(genre.toLowerCase())) {
          return false
        }
      }
      return true
    }

    var newBookSearchedInfo = []
    for (const thisId of bookIdsList) {
      const thisTitle = await readTextFile(
        `/bookflix-searchable-book-info/${thisId}/title.txt`
      )
      const thisGenres = (
        await readTextFile(
          `/bookflix-searchable-book-info/${thisId}/genres.txt`
        )
      )
        .split(",")
        .map((genre) => genre.toLowerCase())

      const thisAuthor = await readTextFile(
        `/bookflix-searchable-book-info/${thisId}/author.txt`
      )
      const thisRating = parseFloat(
        await readTextFile(
          `/bookflix-searchable-book-info/${thisId}/rating.txt`
        )
      )

      const thisCoverURL = `/bookflix-searchable-book-info/${thisId}/cover.png`

      if (
        thisTitle.toLowerCase().includes(bookSearchValue.toLowerCase()) &&
        includeAllGenres(thisGenres)
      ) {
        const thisBook: Book = {
          id: thisId,
          title: thisTitle,
          author: thisAuthor,
          rating: thisRating,
          bookCoverURL: thisCoverURL,
        }
        newBookSearchedInfo.push(thisBook)
      }
    }

    setBookSearchedInfo(newBookSearchedInfo)
  }

  return (
    <Box bgcolor="rgb(249, 243, 238)" minHeight="100vh" height="100%" width="100vw">
      <Header activePage="TimSach"/>

      <Box display="flex" justifyContent="space-evenly" mt={10}>
        <Box flexBasis={{ xs: "90%", md: "60%" }}>
          <TextField
            fullWidth
            value={bookSearchValue}
            label="Gõ tên sách"
            variant="outlined"
            onChange={(e) => {
              setBookSearchValue(e.target.value)
            }}
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
                  <IconButton onClick={updateBookSearchedInfo}>
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

          {bookSearchedInfo.map((bookResult) => (
            <BookCardResult bookInfo={bookResult} />
          ))}

          {/* {exampleBookSearchResult.map((bookResult) => (
            <BookCardResult bookInfo={bookResult} />
          ))} */}
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
            onChange={(e) => {
              setGenreSearchList(e.target.value.split(","))
            }}
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
