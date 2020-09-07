import * as React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Counter(props: any) {
  const formatCount = () => {
    const { value: count } = props.counter;
    return count === 0 ? "Zero" : count;
  };

  return (
    <>
      <div className="row">
        <div className="col-1">
        <span className={getBadgeClasses()}>{formatCount()}</span>
        </div>

        <div className="col">
        <button
          onClick={() => props.onIncrement(props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          +{" "}
        </button>
        <button
        disabled={props.counter.value === 0 ? true : false}
          onClick={() => props.onDecrement(props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          {" "}
          -{" "}
        </button>
        <button
          onClick={() => props.onDelete(props.counter.id)}
          className="btn btn-danger btn-sm m 2"
        >
          Delete
        </button>
        </div>
        
      </div>
    </>
  );

  function getBadgeClasses() {
    let classes = " badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
