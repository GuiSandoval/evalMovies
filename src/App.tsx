import React, { useState } from 'react';
import Modal from 'react-modal';

import { Header } from './components/Header';
import { ListFilms } from './components/ListFilms';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewFilmModal, setIsNewFilmModal] = useState(false);


  return (
    <>
      <Header onOpenModalNewFilm={() => setIsNewFilmModal(true)} />
      <ListFilms />

      <Modal isOpen={isNewFilmModal} onRequestClose={() => setIsNewFilmModal(false)}>
        <h2> Avalie um Filme</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}