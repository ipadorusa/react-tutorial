import React, { Component } from 'react';

class MyName extends Component {
  static defaultProps = {
    name: 'ipadorusa'
  };
  render() {
    return (
      <div>
        <p>
          제 이름은 <strong>{this.props.name}</strong> 입니다
        </p>
      </div>
    );
  }
}
export default MyName;
