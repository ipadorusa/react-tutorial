import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });
  };
  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  };
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <p>현재값 : {this.state.number}</p>
        <button type="button" onClick={this.handleIncrease}>
          증가 +{' '}
        </button>
        <button type="button" onClick={this.handleDecrease}>
          감소 -{' '}
        </button>
      </div>
    );
  }
}
export default Counter;
