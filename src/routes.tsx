import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EvalFilms } from './pages/EvalFilms';
import { GeneralFilms } from './pages/GeneralFilms';

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EvalFilms />} />
                <Route path="/lista-filmes" element={<GeneralFilms />} />
            </Routes>
        </BrowserRouter>
    )

}