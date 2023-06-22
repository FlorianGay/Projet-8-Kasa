import React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../../pages/home/index'
import Logement from '../../pages/logement/index'
import Error from '../../pages/error/index'
import Propos from '../../pages/propos/index'
import Header from "../header";

function route() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/logement" element={<Logement/>}/>
                <Route path="/propos" element={<Propos/>}/>
            </Routes>
        </Router>
    )
}

export default route