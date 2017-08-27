import './style.css';
import React from 'react';
import { hierarchy } from 'd3-hierarchy';

import { loadData, saveData } from './utils/data';
import { setNodesWidthAndHeight, getTreeWidthAndHeight } from './utils/tree';

import Tree from './components/Tree';
import TextArea from './components/TextArea';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: loadData(),
      horizontalSpace: 34,
      nodeHeight: 18,
      verticalSpace: 24,
      margin: {
        top: 10,
        right: 64,
        bottom: 10,
        left: 40
      }
    };
  }

  onDataChange = (e) => {
    const value = e.currentTarget.innerText;
    try {
      const data = JSON.parse(value);
      saveData(data);
      this.setState({ data }); // eslint-disable-line
    } catch (e) {} // eslint-disable-line
  }

  render() {
    const { nodeHeight, verticalSpace, horizontalSpace, margin, data } = this.state;

    if (!data) return null;

    const dataWithWidth = setNodesWidthAndHeight(nodeHeight, data);
    const { width, height } = getTreeWidthAndHeight(horizontalSpace, verticalSpace, nodeHeight, dataWithWidth);
    const hData = hierarchy(dataWithWidth);
    return (
      <div>
        <div className="svg-container">
          <Tree width={width} height={height} margin={margin} data={hData} />
        </div>
        <h2 className="data-title">Data:</h2>
        <TextArea onChange={this.onDataChange} value={data} />
      </div>
    );
  }
}
