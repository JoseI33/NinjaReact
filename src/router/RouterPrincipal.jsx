import React from 'react'
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Footer from '../Pages/Footer/Footer'
import Error from '../Pages/Error/Error'

function RouterPrincipal() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/footer' element={<Footer/>} />
                <Route path='*' element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal