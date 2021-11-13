import React from 'react';

class Counter extends React.Component {
 
    state = {
      value: 0,
    }
    render() {
      return <div>
        <h1>{this.state.value}</h1>
        <div>
          <button onClick={this.handleAdd}>+</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.handleSubtract}>-</button>
        </div>
      </div>
    }
    handleAdd = () => {
      console.log("clicked + button")
      const oldValue = this.state.value
      this.setState({
          value : oldValue + 1
      })
  
    }
    handleSubtract = () => {
      console.log("clicked - button")
      const oldValue = this.state.value
      if(oldValue <= 0)
      return 
      this.setState({
        value: oldValue - 1
      })
    }
    reset = () => {
      console.log("clicked reset button")
      const oldValue = this.state.value
      this.setState({
        value: 0
      })
    }
  }
  export default Counter;