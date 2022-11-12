import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
// import Project from '../Project';
import Contactus from '../Contactus';
import Footer from "../Footer"


const Routercomponent = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contactus' element={<Contactus />} />



            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routercomponent