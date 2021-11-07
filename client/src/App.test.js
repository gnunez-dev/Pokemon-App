import { render, screen } from '@testing-library/react';
import LandingPage from './components/LandingPage/LandingPage';

test('renders learn react link', () => {
  render(<LandingPage />);
  const linkElement = screen.getByText(/See Pokemons/i);
  expect(linkElement).toBeInTheDocument();
});
