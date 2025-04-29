import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Calculator } from './Calculator';

describe('Calculator', () => {
  it('renders display and buttons', () => {
    render(<Calculator />);
    expect(screen.getByTestId('display')).toHaveTextContent('0');//w display ustawiam data-testid zeby odroznic 0 z ekranu od tego od przycisku
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.queryAllByText('0').length).toBeGreaterThan(0); //sprawdz ze przycik 0 istnieje ale nie ktory konkretnie tlyko czy mam jakikolwiek eleement z 0
});

  it('updates display when typing', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    expect(screen.getByTestId('display')).toHaveTextContent('2+3');
  });

  it('calculates result when = clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('5');
  });

  it('clears display when C clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('C'));
    expect(screen.getByTestId('display')).toHaveTextContent('0');
  });

  it('changes sign when +/- clicked', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+/-'));
    expect(screen.getByTestId('display')).toHaveTextContent('-5');
  });

  it('calculates percent correctly', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('%'));
    expect(screen.getByTestId('display')).toHaveTextContent('0.5');
  });

  //Testy corner-case'ów

  it('shows Error when dividing by zero', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('Error');
  });

  it('shows Error for invalid expressions like 5++2', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('Error');
  });

  it('shows Error when clicking = after incomplete expression', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('Error');
  });

  it('shows Error for multiple dots', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTestId('display')).toHaveTextContent('Error');
  });
});
