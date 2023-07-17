import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Typography, TextField, Box, InputAdornment, Drawer, Hidden, Slider } from "@mui/material"

import Header from "../../Bookflix-Components/Header/Header"

import BookCardResult from "./components/BookCardResult"

import SearchIcon from "@mui/icons-material/Search"

import IconButton from "@mui/material/IconButton"

import TuneIcon from "@mui/icons-material/Tune"

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import getSearchableBookIds from "../../store/getSearchableBookIds"

import readTextFile from "../../store/readTextFile"
import FilterAutocomplete from "./components/FilterAutocomplete"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { toDate, format, parse } from 'date-fns';
import readJsonFile from "../../store/readJsonFile"

interface Book {
  id: string
  title: string
  author: string
  rating: number
  publishDate: Date
  bookCoverURL: string
}

function TimSach() {
  const { searchQueryInURL } = useParams()
  const bookIdsList = getSearchableBookIds()
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [bookSearchValue, setBookSearchValue] = useState(searchQueryInURL ? searchQueryInURL : "")

  const handleGenreChange = (event: any, value: string[]) => {
    setFilteredGenres(value)
  }

  const handleAuthorChange = (event: any, value: string[]) => {
    setFilteredAuthors(value)
  }

  const handleFilteredStartDateChange = (value: Date | null) => {
    setFilteredStartDate(value ? toDate(value) : new Date(2000,0,1))
  }

  const handleFilteredEndDateChange = (value: Date | null) => {
    setFilteredEndDate(value ? toDate(value) : new Date(2000,0,1))
  }

  const handleFilteredRatingChange = (event: any, value: number | number[]) => {
    setFilteredRating(value)
  }

  const [filteredGenres, setFilteredGenres] = useState<string[]>([])
  const [filteredAuthors, setFilteredAuthors] = useState<string[]>([])
  const [filteredStartDate, setFilteredStartDate] = useState<Date>(new Date(2000,0,1))
  const [filteredEndDate, setFilteredEndDate] = useState<Date>(new Date(2030,0,1))
  const [filteredRating, setFilteredRating] = useState<number | number[]>([0, 5])

  const [bookSearchedInfo_stringified, setBookSearchedInfo_stringified] = useState<Set<string>>(new Set())

  const exampleGenres = ["Rất chi là hoang dã", "Ma quỷ", "Đáng sợ", "Tình yêu", "Lãng mạn", "Tâm thần"]
  const exampleAuthors = ["Nguyễn Nhật Ánh", "Trương Anh Ngọc", "Lucas Fermat", "Donald J. Trump"]

  const updateBookSearchedInfo = async () => {
    setBookSearchedInfo_stringified(new Set())
    for (const thisId of bookIdsList) {
      const infoJson = await readJsonFile(`/bookflix-searchable-book-info/${thisId}/info.json`)

      console.log(infoJson)

      const thisTitle = infoJson['title']
      const thisGenres = infoJson['genres']
      const thisAuthor = infoJson['author']
      const thisRating = infoJson['rating']
      const thisDate = parse(infoJson["publishdate"], 'yyyy/MM/dd', new Date())
      const thisCoverURL = `/bookflix-searchable-book-info/${thisId}/cover.png`

      const goodTitle = thisTitle.toLowerCase().includes(bookSearchValue.toLowerCase())
      const goodGenres = filteredGenres.every((value) => thisGenres.includes(value.toLowerCase()))
      const goodAuthor = filteredAuthors.length == 0 || filteredAuthors.includes(thisAuthor)
      const goodRating = (filteredRating as number[])[0] <= thisRating && thisRating <= (filteredRating as number[])[1]
      const goodDate = filteredStartDate.getTime() <= thisDate.getTime() && thisDate.getTime() <= filteredEndDate.getTime()

      if (goodTitle && goodGenres && goodAuthor && goodRating && goodDate) {
        console.log(thisTitle)
        const thisBook: Book = {
          id: thisId,
          title: thisTitle,
          author: thisAuthor,
          rating: thisRating,
          publishDate: thisDate,
          bookCoverURL: thisCoverURL,
        }
        setBookSearchedInfo_stringified((oldSet) => new Set([...oldSet, JSON.stringify(thisBook)]))
      }
    }
  }

  useEffect(() => {
    updateBookSearchedInfo()
  }, [])

  return (
    <Box bgcolor="rgb(249, 243, 238)" minHeight="100vh" height="100%" width="100%">
      <Header activePage="TimSach" />

      <Box display="flex" justifyContent="space-evenly" mt={10}>
        <Box flexBasis={{ xs: "90%", md: "60%" }}>
          <TextField
            fullWidth
            value={bookSearchValue}
            label="Gõ tên sách"
            variant="outlined"
            onChange={(e) => setBookSearchValue(e.target.value)}
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
                  <IconButton
                    onClick={() => updateBookSearchedInfo()}
                    sx={{
                      bgcolor: "rgb(47, 62, 116)",
                      color: "white",
                      "&:hover": {
                        bgcolor: "rgb(27, 42, 86)",
                      },
                    }}
                  >
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

          {[...bookSearchedInfo_stringified].map((bookResult) => (
            <BookCardResult bookInfo={JSON.parse(bookResult)} />
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
            FILTER
          </Typography>

          <Box bgcolor="rgb(174, 170, 166)" height={4} my={3}></Box>

          <FilterAutocomplete value={filteredGenres} options={exampleGenres} placeholder="Thể loại" sx={undefined} onChange={handleGenreChange} />

          <FilterAutocomplete value={filteredAuthors} options={exampleAuthors} placeholder="Tác giả" sx={{ mt: 3 }} onChange={handleAuthorChange} />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Xuất bản từ
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={filteredStartDate}
              onChange={handleFilteredStartDateChange}
              slotProps={{
                desktopPaper: {
                  elevation: 0,
                },
                textField: {
                  fullWidth: true,
                },
              }}
              sx={{
                mt: 1,
                bgcolor: "white",
                flexGrow: 1,
                borderColor: "transparent",
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
            ></DatePicker>
          </LocalizationProvider>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Đến
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={filteredEndDate}
              onChange={handleFilteredEndDateChange}
              slotProps={{
                desktopPaper: {
                  elevation: 0,
                },
                textField: {
                  fullWidth: true,
                },
              }}
              sx={{
                mt: 1,
                bgcolor: "white",
                flexGrow: 1,
                borderColor: "transparent",
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
            ></DatePicker>
          </LocalizationProvider>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Đánh giá
          </Typography>
          <Slider value={filteredRating} step={0.25} min={0} max={5} valueLabelDisplay="auto" onChange={handleFilteredRatingChange} sx={{ mt: 1 }} />
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
        <IconButton onClick={() => setIsFilterDrawerOpen(false)}>
          <KeyboardArrowDownIcon fontSize="large" sx={{ mx: "auto" }} />
        </IconButton>

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

          <FilterAutocomplete value={filteredGenres} options={exampleGenres} placeholder="Thể loại" sx={undefined} onChange={handleGenreChange} />

          <FilterAutocomplete value={filteredAuthors} options={exampleAuthors} placeholder="Tác giả" sx={{ mt: 3 }} onChange={handleAuthorChange} />

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Xuất bản từ
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={filteredStartDate}
              onChange={handleFilteredStartDateChange}
              slotProps={{
                desktopPaper: {
                  elevation: 0,
                },
                textField: {
                  fullWidth: true,
                },
              }}
              sx={{
                mt: 1,
                bgcolor: "white",
                flexGrow: 1,
                borderColor: "transparent",
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
            ></DatePicker>
          </LocalizationProvider>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Đến
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              value={filteredEndDate}
              onChange={handleFilteredEndDateChange}
              slotProps={{
                desktopPaper: {
                  elevation: 0,
                },
                textField: {
                  fullWidth: true,
                },
              }}
              sx={{
                mt: 1,
                bgcolor: "white",
                flexGrow: 1,
                borderColor: "transparent",
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
            ></DatePicker>
          </LocalizationProvider>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontFamily: "Barlow, serif",
              color: "rgb(47, 62, 116)",
              mt: 3,
            }}
          >
            Đánh giá
          </Typography>
          <Slider value={filteredRating} step={0.25} min={0} max={5} valueLabelDisplay="auto" onChange={handleFilteredRatingChange} sx={{ mt: 1 }} />
        </Box>
      </Drawer>
    </Box>
  )
}

export default TimSach
