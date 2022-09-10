import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Main from "../views/Main"
import Home from "../views/Home";
import Education from "../views/Education";
import Skills from "../views/Skills";
import Experience from "../views/Experience";
import Contact from "../views/Contact";
import ErrorPage from "../views/ErrorPage";

const CustomRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}></Route> 
               {/*  <Route path="/home" element={<Home/>}></Route>
                <Route path="/education" element={<Education/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/experience" element={<Experience/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route> */}
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default CustomRoutes
