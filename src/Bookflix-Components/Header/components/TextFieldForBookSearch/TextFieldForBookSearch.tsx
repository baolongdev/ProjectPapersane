import { TextField, InputAdornment, IconButton } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { Link, useNavigate } from "react-router-dom"

interface Props {
  setBookSearchValue: (value: string) => void
  bookSearchValue: string
}

const TextFieldForBookSearch = ({ setBookSearchValue, bookSearchValue }: Props) => {
  const navigate = useNavigate()
  return (
    <TextField
      label="Gõ tên sách"
      variant="outlined"
      onChange={(e) => setBookSearchValue(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          navigate(`/bookflix/TimSach/${bookSearchValue}`)
        }
      }}
      InputLabelProps={{
        sx: { fontFamily: "var(--body-font-bookflix)" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              component={Link}
              to={`/bookflix/TimSach/${bookSearchValue}`}
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
