import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';

import { ModalContext } from './ModalContext';

import { Header } from './components/Header';
import { ModalNewFilm } from './components/ModalNewFilm';
// import { ModalContext } from './ModalContext';
import { RoutesApp } from './routes';
import { ContentLayout, GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [modal, setModal] = useState(false);
  const [filmContext, setFilmContext ] = useState({});

  const handleToggleModal = () => {
    setModal(!modal);
  }
  return (
    <ModalContext.Provider value={{ modal, handleToggleModal, filmContext, setFilmContext }} >
      <BrowserRouter>
        <Header />
        <ContentLayout>
          <RoutesApp />
        </ContentLayout>
      </BrowserRouter>

      <ModalNewFilm isHandleClose={() => setModal(false)} isOpen={modal} />
      <GlobalStyle />
    </ModalContext.Provider>
  );
}