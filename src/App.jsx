import './App.css'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Letters from "./Letters";
import LettersDetail from "./LettersDetail"


export default function App() {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/letters" element={<Letters />} />
                <Route path="/letters/:id" element={<LettersDetail />} />
            </Routes>
        </Router>
    )
}
   