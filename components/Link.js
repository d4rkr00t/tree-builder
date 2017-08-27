import React from 'react';
import { LinkHorizontal } from '@vx/shape';

import colors from '../utils/colors';

export default ({ link }) => {
  return (
    <LinkHorizontal
      data={link}
      stroke={colors.link}
      strokeWidth="1"
      fill="none"
    />
  );
};

