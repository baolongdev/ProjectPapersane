import { Autocomplete, Chip, TextField, Paper, PaperProps } from "@mui/material"

interface FilterAutocompleteProps {
  value: string[]
  options: string[]
  placeholder: string
  sx: Record<string, any> | undefined
  onChange: (event: any, value: string[]) => void
}

const CustomPaper = (props: PaperProps) => {
  return <Paper elevation={0} sx={{ borderRadius: 0, fontFamily: "Barlow, serif" }} {...props}></Paper>
}

const FilterAutocomplete = ({ value, options, placeholder, sx, onChange }: FilterAutocompleteProps) => {
  return (
    <Autocomplete
      value={value}
      multiple
      options={options}
      PaperComponent={CustomPaper}
      onChange={onChange}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip
            variant="filled"
            label={option}
            {...getTagProps({ index })}
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              fontFamily: "Barlow, serif",
              color: "white",
              bgcolor: "rgb(132, 163, 219)",
            }}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder={placeholder}
          sx={{
            ...sx,
            fontFamily: "Barlow, serif",
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
        />
      )}
    />
  )
}

export default FilterAutocomplete
