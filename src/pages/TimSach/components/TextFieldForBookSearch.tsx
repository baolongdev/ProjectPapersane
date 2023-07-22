import { TextField, InputAdornment, Hidden, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import TuneIcon from "@mui/icons-material/Tune"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

interface Props {
  bookSearchValue: string
  setBookSearchValue: (value: string) => void
  updateBookSearchedInfo: () => Promise<void>
  setIsFilterDrawerOpen: (value: boolean) => void
}

const TextFieldForBookSearch = ({ bookSearchValue, setBookSearchValue, updateBookSearchedInfo, setIsFilterDrawerOpen }: Props) => {
  return (
    <TextField
      fullWidth
      value={bookSearchValue}
      label="Gõ tên sách"
      variant="outlined"
      onChange={(e) => setBookSearchValue(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          updateBookSearchedInfo()
        }
      }}
      InputLabelProps={{
        sx: { fontFamily: "var(--body-font-bookflix)" },
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
                bgcolor: "var(--bookflix-logo-color)",
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
            borderColor: "var(--bookflix-logo-color)",
            borderWidth: "2px",
          },
          "&:hover fieldset": {
            borderColor: "var(--bookflix-logo-color)",
            borderWidth: "2px",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--bookflix-logo-color)",
            borderWidth: "2px",
          },
        },
        "& label.Mui-focused": {
          color: "var(--bookflix-logo-color)",
        },
      }}
    />
  )
}

export default TextFieldForBookSearch
