import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../services/counterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterIncrement());
  };
  const handleReset = () => {
    dispatch(counterReset());
  };
  const handleDecrement = () => {
    dispatch(counterDecrement());
  };

  return (
    <div>
      <h3>Counter App</h3>
      <h2>Counter : {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
