import React, {useRef, useState} from 'react';
import {Button, TextField, Input} from "@mui/material";
import styles from "./Game.module.css"

export default function Game() {
    const [isNewGame, setIsNewGame] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("");
    const [guessNumber, setGuessNumber] = useState(0);
    const inputRef = useRef(null);

    function startGame() {
        setAttempts(0);
        inputRef.current.value = '';
        setMessage('');
        setIsNewGame(true);
        let randomNumber = Math.floor(Math.random() * 500) + 1;
        setGuessNumber(randomNumber);
    }

    function Check() {
        if (Number(guessNumber) === Number(inputRef.current.value)) {
            setMessage('Good Job!');
            setIsNewGame(false);
        } else if (Number(guessNumber) < Number(inputRef.current.value)) {
            setMessage(`N < ${inputRef.current.value}`);
        } else {
            setMessage(`N > ${inputRef.current.value}`);
        }
        setAttempts(attempts + 1);
        if (attempts === 9) {
            setMessage('Game over');
            setIsNewGame(false);
        }
        if (Number(inputRef.current.value) < 1) {
            setMessage('You lose');
            setIsNewGame(false);
        }
        inputRef.current.value = '';
    }

    return (
        <div>
            <div className={styles.wrapper}>
                <Button variant="contained" color="success" disabled={isNewGame} onClick={startGame}>New Game</Button>
                <Input className={styles.input} inputRef={inputRef} InputProps={{inputProps: {min: 1, max: 500}}}
                       label="Your number" variant="outlined" disabled={!isNewGame}/>
                <Button variant="contained" color="success" disabled={!isNewGame} onClick={Check}>Check</Button>
                <Button variant="contained" color="success" onClick={() => (setIsNewGame(false), setAttempts(0), setMessage(""))} disabled={!isNewGame}>Quit</Button>
            </div>
            <p>Attempts: {attempts}</p>
            <div className={styles.message}>
                {message}
            </div>
        </div>
    );
}