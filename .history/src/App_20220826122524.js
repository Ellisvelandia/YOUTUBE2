import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

const App = () => {
<BrowserRouter>
<Box sx={{backgroundColor: '#000'}}>
  <Navbar/>
  <Routes>
  <Route path="/" exact element ={<Feed/>}/>
  <Route path="/video/:id"  element ={<VideoDetail/>}/>
  <Route path="/channel/:"  element ={<Feed/>}/>
  <Route path="/"  element ={<Feed/>}/>
  </Routes>
</ Box>
</BrowserRouter>
};

export default App;
