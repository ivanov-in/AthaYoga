import { Box } from "@mui/material";
import React from "react";
import logo from "../images/logo.png";

export const Logo = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d6efd'
      }}
    >
      <img src={logo} alt="Logo" draggable="false" />
    </Box>
  );
};
