import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Favorite from '../pages/FavoritePokemons';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibida na tela a mensagem No favorite pokemon'
  + ' found, caso a pessoa não tenha pokémons favoritos;', () => {
    renderWithRouter(<Favorite />);
    const frase = screen.getByText(/No favorite pokemon found/i);

    expect(frase).toBeInTheDocument();
  });
});
