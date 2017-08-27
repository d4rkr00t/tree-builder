import React from 'react';
import { Group } from '@vx/group';

import colors from '../utils/colors';

export default ({ node }) => {
  const width = node.data.width;
  const height = node.data.height || 18;
  return (
    <Group top={node.x} left={node.y}>
      {node.depth === 0 &&
        <circle
          r={width / 1.8}
          fill="url('#lg')"
        />
      }
      {node.depth !== 0 &&
        <rect
          height={height}
          width={width}
          y={-height / 2}
          x={-width / 2}
          fill={colors.bg}
          stroke={node.children ? colors.withChildrenStroke : colors.noChildrenStroke}
          strokeWidth={1}
          strokeDasharray={!node.children ? "2,2" : "0"}
          strokeOpacity={!node.children ? .6 : 1}
          rx={!node.children ? 10 : 0}
        />
      }
      <text
        dy={".33em"}
        fontSize={7}
        fontFamily="Arial"
        textAnchor={"middle"}
        style={{ pointerEvents: "none" }}
        fill={node.depth === 0 ? colors.rootNodeText : node.children ? colors.withChildrenText : colors.noChildrenText}
      >
        {node.data.name}
      </text>
    </Group>
  );
}
