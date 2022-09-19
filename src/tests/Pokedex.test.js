import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const botao = screen.getByRole('button', { name: /Fire/i });
    expect(botao).toBeInTheDocument();
    userEvent.click(botao);
  });
  test('Os botões de filtragem por tipo possuem o'
  + ' data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const botao = screen.getAllByTestId('pokemon-type-button');
    const tipos = 7;
    expect(botao).toHaveLength(tipos);
  });
  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const botaoAll = screen.getByRole('button', { name: /All/i });
    expect(botaoAll).toBeInTheDocument();
    userEvent.click(botaoAll);
  });
});
