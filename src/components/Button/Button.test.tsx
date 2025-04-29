import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders the label', () => {
    render(<Button label="7" onClick={() => {}} />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('calls onClick with label when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="5" onClick={handleClick} />);
    fireEvent.click(screen.getByText('5'));
    expect(handleClick).toHaveBeenCalledWith('5');
  });
});
