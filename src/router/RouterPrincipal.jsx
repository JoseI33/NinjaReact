import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import {Home} from '../assets/components/Pages/Home'
import {Footer} from '../assets/components/Pages/Footer/Footer'
import {Error} from '../assets/components/Pages/Error404/Error'

function RouterPrincipal() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={Home}/>
                <Route path='/' element={Footer}/>
                <Route path='/' element={Error}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterPrincipal