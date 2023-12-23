import { render, screen } from '@testing-library/react';
import Cabecalho from '.';

describe('<Cabecalho />', () => {
  test('Deve renderizar o cabeçalho', () => {
    render(<Cabecalho />);
    const titulo = screen.getByText('Plano Estratégico');
    expect(titulo).toBeInTheDocument();
  });
});
