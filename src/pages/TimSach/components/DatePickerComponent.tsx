import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

interface Props {
  year: number
  handleYearChange: (value: Date | null) => void
}

const DatePickerComponent = ({ year, handleYearChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} localeText={{ datePickerToolbarTitle: "Chọn năm", cancelButtonLabel: "Hủy" }}>
      <DatePicker
        views={["year"]}
        value={new Date(year, 0, 1)}
        onChange={handleYearChange}
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
  )
}

export default DatePickerComponent
