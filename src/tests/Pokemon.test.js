import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  const pikachu = 'Pikachu sprite';
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const imagem = screen.getByRole('img', { name: pikachu });

    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    const imagem = screen.getByRole('img', { name: pikachu });

    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('alt', pikachu);
  });
  test('A imagem de favorito star possui o src /star-icon.svg e alt'
  + ' <name> is marked as favorite', () => {
    renderWithRouter(<App />);
    const detalhes = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detalhes);
    const pokemonFavorito = screen.getByLabelText(/pokémon favoritado?/i);
    userEvent.click(pokemonFavorito);
    const favoritado = screen.getByRole('img', { name:
    'Pikachu is marked as favorite' });
    expect(favoritado).toBeInTheDocument();
    expect(favoritado).toHaveAttribute(
      'src',
      '/star-icon.svg',
      'alt',
      'Pikachu is marked as favorite',
    );
  });
  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const tipo = screen.getByTestId('pokemon-type', { name: /electric/i });
    expect(tipo).toBeInTheDocument();
    expect(tipo.innerHTML).toBe('Electric');
  });
});
