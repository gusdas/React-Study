import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixNumber: 0,
  };
  render() {
    const { number, fixNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h2>{fixNumber}</h2>
        <button
          onClick={() => {
            console.log(`state호출전:${this.state.number}`);
            this.setState({ number: number + 1 }, () => {
              console.log(`방금state호출:${JSON.stringify(this.state)}`);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
