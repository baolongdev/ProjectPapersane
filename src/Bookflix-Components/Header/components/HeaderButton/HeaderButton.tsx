import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'

interface HeaderButtonProp {
    buttonText: string,
    buttonLink: string,
    isActivePage: boolean,
}

function HeaderButton({buttonText, buttonLink, isActivePage} : HeaderButtonProp) {
  return (
    <Button
      component={Link}
      to={buttonLink}
      sx={{
        p: 2,
        px: 3,
        fontSize: "20px",
        fontFamily: "var(--body-font-bookflix)",
        borderRadius: "50px",
        backgroundColor: isActivePage ? "var(--bookflix-logo-color)" : "transparent",
        color: isActivePage ? "white" : "black",
        "&:hover": {
          backgroundColor: isActivePage
            ? "var(--bookflix-logo-color)"
            : "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      {buttonText}
    </Button>
  )
}

export default HeaderButton