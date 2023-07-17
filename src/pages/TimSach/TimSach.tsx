import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Typography, TextField, Box, InputAdornment, Drawer, Hidden, Slider } from "@mui/material"

import Header from "../../Bookflix-Components/Header/Header"

import BookCardResult from "./components/BookCardResult"

import SearchIcon from "@mui/icons-material/Search"

import IconButton from "@mui/material/IconButton"

import TuneIcon from "@mui/icons-material/Tune"

import getSearchableBookIds from "../../store/getSearchableBookIds"

import readTextFile from "../../store/readTextFile"
import FilterAutocomplete from "./components/FilterAutocomplete"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs, { Dayjs } from "dayjs"

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

  const handleFilteredStartDateChange = (value: Dayjs | null) => {
    setFilteredStartDate(value ? value.toDate() : new Date("2000/01/01"))
  }

  const handleFilteredEndDateChange = (value: Dayjs | null) => {
    setFilteredEndDate(value ? value.toDate() : new Date("2000/01/01"))
  }

  const handleFilteredRatingChange = (event: any, value: number | number[]) => {
    setFilteredRating(value)
  }

  const [filteredGenres, setFilteredGenres] = useState<string[]>([])
  const [filteredAuthors, setFilteredAuthors] = useState<string[]>([])
  const [filteredStartDate, setFilteredStartDate] = useState<Date>(new Date("2000/01/01"))
  const [filteredEndDate, setFilteredEndDate] = useState<Date>(new Date("2030/01/01"))
  const [filteredRating, setFilteredRating] = useState<number | number[]>([0, 5])

  const [bookSearchedInfo, setBookSearchedInfo] = useState<Book[]>([])

  const exampleGenres = ["Rất chi là hoang dã", "Ma quỷ", "Đáng sợ", "Tình yêu", "Lãng mạn", "Tâm thần"]
  const exampleAuthors = ["Nguyễn Nhật Ánh", "Trương Anh Ngọc", "Lucas Fermat", "Donald J. Trump"]

  const updateBookSearchedInfo = async () => {
    const checkDateBetween = ({ start, x, end }: { start: Date; x: Date; end: Date }) => {
      return
    }

    var newBookSearchedInfo: Book[] = []
    for (const thisId of bookIdsList) {
      const thisTitle = await readTextFile(`/bookflix-searchable-book-info/${thisId}/title.txt`)
      const thisGenres = (await readTextFile(`/bookflix-searchable-book-info/${thisId}/genres.txt`)).split(",").map((genre) => genre.toLowerCase())
      const thisAuthor = await readTextFile(`/bookflix-searchable-book-info/${thisId}/author.txt`)
      const thisRating = parseFloat(await readTextFile(`/bookflix-searchable-book-info/${thisId}/rating.txt`))
      const thisDate = new Date(Date.parse(await readTextFile(`/bookflix-searchable-book-info/${thisId}/publishdate.txt`)))
      const thisCoverURL = `/bookflix-searchable-book-info/${thisId}/cover.png`

      const goodTitle = thisTitle.toLowerCase().includes(bookSearchValue.toLowerCase())
      const goodGenres = filteredGenres.every((value) => thisGenres.includes(value.toLowerCase()))
      const goodAuthor = filteredAuthors.length == 0 || filteredAuthors.includes(thisAuthor)
      const goodRating = (filteredRating as number[])[0] <= thisRating && thisRating <= (filteredRating as number[])[1]
      const goodDate = filteredStartDate <= thisDate && thisDate <= filteredEndDate

      console.log([filteredStartDate, thisDate, filteredEndDate])

      if (goodTitle && goodGenres && goodAuthor && goodRating && goodDate) {
        const thisBook: Book = {
          id: thisId,
          title: thisTitle,
          author: thisAuthor,
          rating: thisRating,
          publishDate: thisDate,
          bookCoverURL: thisCoverURL,
        }
        newBookSearchedInfo.push(thisBook)
      }
    }
    setBookSearchedInfo(newBookSearchedInfo)
  }

  useEffect(() => {
    updateBookSearchedInfo()
  }, [])

  return (
    <Box bgcolor="rgb(249, 243, 238)" minHeight="100vh" height="100%" minWidth="100vw" width="100%">
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

          {bookSearchedInfo.map((bookResult) => (
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(filteredStartDate)}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(filteredEndDate)}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs("01-01-2000")}
              value={dayjs(filteredStartDate)}
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs("01-01-2030")}
              value={dayjs(filteredEndDate)}
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
