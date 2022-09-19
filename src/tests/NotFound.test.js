import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  test('Teste se a página contém um heading'
    + ' h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const msg = screen.getByRole(
      'heading',
      { name: /Page requested not found/i, level: 2 },
    );
    expect(msg).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const imagem = screen.getByRole('img');

    expect(imagem).toBeInTheDocument();
    expect(imagem).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
