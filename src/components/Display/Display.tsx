import React, { FC } from 'react';

interface DisplayProps {
  value: string;
}

export const Display: FC<DisplayProps> = ({ value }) => {
  return (
    <div className="display" data-testid='display'>
      {value || '0'}
    </div>
  );
};
