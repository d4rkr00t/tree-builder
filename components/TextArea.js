import React from 'react';

export default class TextArea extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <pre contentEditable onInput={this.props.onChange}>
      {JSON.stringify(this.props.value, null, 2)}
    </pre>;
  }
}
