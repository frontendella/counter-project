import { number } from "prop-types";
import React, { Component } from "react";

class ClassCounter extends Component {
  state = {
    number: 0
  };

  handleIncrease = () => {
    if (this.state.number < this.props.maxNumber) {
      /*

      this.setState({
        number: this.state.number + 1,
      });


      this.setState(({ number }) => ({
        number: number + 1,
      }));
      */

      const { number } = this.state;
      this.setState({
        number: number + 1
      });
    } else {
      alert("The maximum number is reached");
    }
  };

  handleDecrease = () => {
    if (this.state.number > 0) {
      this.setState({
        number: this.state.number - 1
      });
    }
  };

  render() {
    return (
      <div className="counter">
        <header>
          <h1>Tally Counter</h1>
          <p>
            The max number is <strong>{this.props.maxNumber}</strong>
          </p>
        </header>
        <div className="stepper">
          <button
            type="button"
            onClick={this.handleDecrease}
            disabled={this.state.number <= 0 ? "disabled" : ""}
          >
          </button>
          
          <div className="number">{this.state.number}</div>
          <button type="button" onClick={this.handleIncrease}>

          </button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
