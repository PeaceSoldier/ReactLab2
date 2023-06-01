import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import CountRow from "../CountRow/CountRow";
import {useState} from "react";
import styles from "./Cart.module.css"

export const Cart = (props) => {
    const {products} = props;

    function getQuan(products) {
        let totalQuantity = 0;

        products.forEach((product) => {
            totalQuantity += product.min;
        });

        return totalQuantity;
    }

    function getTotal(products) {
        let totalSum = 0;

        products.forEach((product) => {
            totalSum += product.min * product.price;
        });

        return totalSum;
    }

    const [totals, setTotals] = useState({
        quantity: getQuan(products),
        totalSum: getTotal(products)
    });

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.center}>Name</TableCell>
                        <TableCell className={styles.center}>Price</TableCell>
                        <TableCell className={styles.center}>Quantity</TableCell>
                        <TableCell className={styles.center}>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => (
                        <CountRow key={product.id} product={product} totals={totals} setTotals={setTotals}/>
                    ))
                    }
                    <TableRow>
                        <TableCell className={styles.center} colSpan={2}>Totals</TableCell>
                        <TableCell className={styles.center}>{totals.quantity}</TableCell>
                        <TableCell className={styles.center}>{totals.totalSum}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}