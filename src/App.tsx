import React, { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { ListFilms } from './components/ListFilms';
import { ModalNewFilm } from './components/ModalNewFilm';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewFilmModal, setIsNewFilmModal] = useState(false);


  return (
    <>
      <Header onOpenModalNewFilm={() => setIsNewFilmModal(true)} />
      <ListFilms />

      <ModalNewFilm isHandleClose={() => setIsNewFilmModal(false)} isOpen={isNewFilmModal} />
      <GlobalStyle />
    </>
  );
}