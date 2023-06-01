import React, {useState} from "react";
import {Button} from "@mui/material";
import styles from "./Counter.module.css"

export default function Counter(props) {
    const {initial, min, max} = props.counter;
    const [count, setCount] = useState(initial || 0);
    function plusCount() {
        setCount(count + 1);
    }
    function minusCount() {
        setCount(count - 1);
    }
    function resetCount() {
        setCount(initial || 0);
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <p>{count}</p>
                <Button variant="contained" onClick={plusCount} disabled={count === max}>+</Button>
                <Button variant="contained" onClick={minusCount} disabled={count === min}>-</Button>
                <Button variant="contained" color="success" onClick={resetCount}>Reset</Button>
            </div>
        </div>
    );
}

