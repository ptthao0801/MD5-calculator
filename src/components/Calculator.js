import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      result: null
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOperation = (operation) => {
    const { num1, num2 } = this.state;
    let result;
    switch (operation) {
      case 'add':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    this.setState({
      result: result.toFixed(2) // Định dạng kết quả làm tròn đến hai chữ số thập phân
    });
  }
    
  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h2>Simple Calculator</h2>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={this.handleInputChange}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={this.handleInputChange}
          placeholder="Enter number 2"
        />
        <br />
        <button onClick={() => this.handleOperation('add')}>+</button>
        <button onClick={() => this.handleOperation('subtract')}>-</button>
        <button onClick={() => this.handleOperation('multiply')}>*</button>
        <button onClick={() => this.handleOperation('divide')}>/</button>
            <br />
            {result && < h3 > Result: {result}</h3>}
      </div>
    );
  }
}

export default Calculator;
