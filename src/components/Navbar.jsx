import React, {StyleSheet} from 'react'
import {logo} from "../utils/constants";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./";
import "../components/components css/Navbar.css"
const Navbar = () => 
   (
    <Stack  direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}> //
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img style={} src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
  );
  


export default Navbar
