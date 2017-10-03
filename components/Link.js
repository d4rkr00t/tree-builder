import React from 'react';
import { LinkHorizontal } from '@vx/shape';

import colors from '../utils/colors';

export default ({ link }) => {
  return (
    <LinkHorizontal
      data={link}
      stroke={colors.link}
      strokeWidth="1"
      strokeDasharray={link.target.data.link === "dot" ? "2,2" : "0"}
      fill="none"
    />
  );
};

