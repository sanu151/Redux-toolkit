import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByValue } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByValue(5))}>
        Increment +5
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
};

export default CounterView;
