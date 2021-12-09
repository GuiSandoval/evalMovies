import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DetailsFilm } from './components/DetailsFilm';
import { EvalFilms } from './pages/EvalFilms';
import { GeneralFilms } from './pages/GeneralFilms';

export function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<EvalFilms />} />
            <Route path="/lista-filmes" element={<GeneralFilms />} />
            <Route path="/detalhes/:idFilm" element={<DetailsFilm />} />
        </Routes>
    )

}