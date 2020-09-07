import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar";
import { Counters } from "./Counters";

export const App = () => {
  const [state, setState] = useState({
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  });
useEffect(() => {
  console.log("s")
},[])
const handleDecrement = (counter:any) => {
  const counters = [...state.counters]
  const index = counters.indexOf(counter)
  counters[index] ={...counter}
   counters[index].value--
   setState({counters})

}
  const handleReset = () => {
    const counters = state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    setState({ counters });
  };
  const handleIncrement = (counter: any) => {
    const counters = [...state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setState({ counters });
  };
  const handleDelete = (counterId: any) => {
    const counters = state.counters.filter(
      (counter) => counter.id !== counterId
    );
    setState({ counters });
    return;
  };


  return (
    <>
      <NavBar totalCounters={state.counters.filter(counter => (counter.value > 0)).length} />
      <main className="container">
        <Counters
onDecrement={handleDecrement}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDelete={handleDelete}
counters={state.counters}
        />
      </main>
    </>
  );
};
