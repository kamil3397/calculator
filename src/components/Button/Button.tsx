import React, { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

export const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

