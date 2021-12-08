import React, { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { ModalNewFilm } from './components/ModalNewFilm';
import { RoutesApp } from './routes';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewFilmModal, setIsNewFilmModal] = useState(false);


  return (
    <>
      <Header onOpenModalNewFilm={() => setIsNewFilmModal(true)} />
      <RoutesApp />

      <ModalNewFilm isHandleClose={() => setIsNewFilmModal(false)} isOpen={isNewFilmModal} />
      <GlobalStyle />
    </>
  );
}