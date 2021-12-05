import React from 'react';
import { Header } from './components/Header';
import { ListFilms } from './components/ListFilms';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <ListFilms />
      <GlobalStyle />
    </>
  );
}