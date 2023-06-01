import {Button, TableCell, TableRow} from "@mui/material";
import {useState} from "react";
import styles from "./CountRow.module.css"

export default function CountRow(props) {
    const {name, min, max, price} = props.product;
    const [count, setCount] = useState(min);

    function Plus() {
        setCount(count + 1);
        props.setTotals(
            {
                quantity: props.totals.quantity + 1,
                totalSum: props.totals.totalSum + price
            }
        );
    }

    function Minus() {
        setCount(count - 1);
        props.setTotals(
            {
                quantity: props.totals.quantity - 1,
                totalSum: props.totals.totalSum - price
            }
        );
    }

    return (
        <TableRow>
            <TableCell className={styles.center} component="th" scope="row">{name}</TableCell>
            <TableCell className={styles.center}>{price}</TableCell>
            <TableCell className={styles.rowButtons}>
                <Button variant="contained" onClick={Minus} disabled={count === min}>-</Button>
                {count}
                <Button variant="contained" onClick={Plus} disabled={count === max}>+</Button>
            </TableCell>
            <TableCell className={styles.center}>{count * price}</TableCell>
        </TableRow>
    )
}
