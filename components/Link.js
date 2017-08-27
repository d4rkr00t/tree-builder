import React from 'react';
import { LinkHorizontal } from '@vx/shape';

export default ({ link }) => {
  return (
    <LinkHorizontal
      data={link}
      stroke="#374466"
      strokeWidth="1"
      fill="none"
    />
  );
};

