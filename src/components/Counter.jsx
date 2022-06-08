import {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    let maxNumber = 3
    let handleIncrease = () => {
        if (count < maxNumber) {
          setCount(count + 1);
        } else {
          alert("The maximum number is reached");
        }
      };
    
      let handleDecrease = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };


    return (
        <div className="counter">
          <header>
            <h1>Tally Counter</h1>
            <p>
              The max number is <strong>{maxNumber}</strong>
            </p>
          </header>
          <div className="stepper">
            <button
              type="button"
              onClick={handleDecrease}
              disabled={count <= 0 ? "disabled" : ""}
            >
            </button>
            
            <div className="number">{count}</div>
            <button type="button" onClick={handleIncrease}>
  
            </button>
          </div>
        </div>
      );

}

export default Counter