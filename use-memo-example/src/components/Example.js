import React, { useState, useMemo } from "react";
import array from "./Array";

const Example = () => {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState(array);

    console.log("Component was evaluated.");

    let incrementCounter = () => {
        setCount(count + 1);
    };

    const selectedItem = useMemo(() => items.find((item) => item.isSelectedItem), [items]);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <p>{count}</p>
            <button className="btn btn-success mb-3" onClick={incrementCounter}>Increment</button>
            <h3>Id of selected item: {selectedItem ? selectedItem.index : "None"}</h3>
        </div>
    );
}

export default Example;
