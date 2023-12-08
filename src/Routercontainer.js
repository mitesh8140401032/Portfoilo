import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './MainLayout';
export default function Routercontainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} />

            </Routes>
        </BrowserRouter>
    )
}
