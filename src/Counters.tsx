import React from "react";
import Counter from "./Counter";

export const Counters = ({onIncrement, onDelete, counters, onReset,onDecrement}: any) => {
  return (
    <>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter: any) => {
        return (
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counter}
          />
        );
      })}
    </>
  );
};
