import getTextWidth from './text-length';

const getNodeWidth = getTextWidth(3, 0.7);
export const getNextChildren = children => children.reduce((acc, child) => acc.concat(child.children || []), []);

export const getTreeWidthAndHeight = (horizontalSpace, verticalSpace, nodeHeight, data) => {
  const prepareResults = (width, depthHorizontal, biggestVerticalDepth) => ({
    width: width + (depthHorizontal * horizontalSpace),
    height: biggestVerticalDepth * nodeHeight + biggestVerticalDepth * verticalSpace
  });

  const process = (children, depthHorizontal, biggestVerticalDepth, accWidth) => {
    if (!children || !children.length) return prepareResults(accWidth, depthHorizontal, biggestVerticalDepth);
    const nextChildren = getNextChildren(children);
    const verticalDepth = biggestVerticalDepth > nextChildren.length ? biggestVerticalDepth : nextChildren.length;
    return process(nextChildren, ++depthHorizontal, verticalDepth, accWidth + children[0].width);
  };

  return process([data], 1, 1, data.width);
};

export const setNodesWidthAndHeight = (height, data) => {
  const process = children => {
    if (!children || !children.length) return;
    const nextChildren = getNextChildren(children);
    const width = nextChildren.reduce((w, c) => w > getNodeWidth(c.name) ? w : getNodeWidth(c.name), 0);
    nextChildren.forEach(c => {
      c.width = Math.max(width, height * 2);
      c.height = height;
    });
    return process(nextChildren);
  };

  process([{ children: [data] }]);
  return data;
};
