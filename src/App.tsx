import React, { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { ModalNewFilm } from './components/ModalNewFilm';
import { RoutesApp } from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewFilmModal, setIsNewFilmModal] = useState(false);


  return (
    <>
      <BrowserRouter>
        <Header onOpenModalNewFilm={() => setIsNewFilmModal(true)} />
        <RoutesApp />
      </BrowserRouter>

      <ModalNewFilm isHandleClose={() => setIsNewFilmModal(false)} isOpen={isNewFilmModal} />
      <GlobalStyle />
    </>
  );
}