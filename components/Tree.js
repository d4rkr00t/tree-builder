import React from 'react';
import { Tree } from '@vx/hierarchy';
import { LinearGradient } from '@vx/gradient';

import colors from '../utils/colors';

import Node from './Node';
import Link from './Link';

export default ({ width, height, margin, data }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`}
    preserveAspectRatio="xMidYMid meet"
  >
    <LinearGradient id="lg" from={colors.rootNodeGr.from} to={colors.rootNodeGr.to} />
    <rect
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      rx={14}
      fill={colors.bg}
    />
    <Tree
      top={margin.top}
      left={margin.left}
      root={data}
      size={[
        height,
        width
      ]}
      nodeComponent={Node}
      linkComponent={Link}
    />
  </svg>;
