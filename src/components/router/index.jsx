import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/index'
import Logement from '../../pages/logement/index'
import Error from '../../pages/error/index'
import Propos from '../../pages/propos/index'

function route() {
    return (
        <React.StrictMode>
            <Router>
                <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/error" element={<Error />} />
                   <Route path="/logement" element={<Logement />} />
                   <Route path="/propos" element={<Propos />} />
                </Routes>
            </Router>
        </React.StrictMode>
    )
}

export default route