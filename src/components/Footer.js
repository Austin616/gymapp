import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="20px"
    >
      Made with React and ExerciseDB API by Austin Tran
    </Typography>
    <Typography variant="body1" textAlign="center" pb="20px ">
      Contact me at: austintran616@gmail.com
    </Typography>
    <Box textAlign="center">
      <form>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  </Box>
);

export default Footer;
