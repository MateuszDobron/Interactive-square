import React, { useEffect, useState } from "react";
import BoardTile from "./BoardTile";
import { configureStore } from '@reduxjs/toolkit'
import moveSlice, { moveDown, moveLeft, moveRight, moveUp } from "../features/moveSlice"

const Board = () => {
    const store = configureStore({reducer: moveSlice});
    const selectHead = (state) => state.head;
    const [headPos, setHeadPos] = useState(selectHead(store.getState()))

    const whatColorFunction = (x, y) => {
        if( x == headPos[0] &&
            y == headPos[1]) {
            return "green";
        }
        else {
            return "white";
        }
    }

    const keyDownFunction = (event) => {
        if (event.key === 'ArrowUp') {
            store.dispatch(moveUp());
        }
        if (event.key === 'ArrowDown') {
            store.dispatch(moveDown());
        }
        if (event.key === 'ArrowLeft') {
            store.dispatch(moveLeft());
        }
        if (event.key === "ArrowRight") {
            store.dispatch(moveRight());
        }
        setHeadPos(selectHead(store.getState()))
    }

    useEffect(() => {
        document.addEventListener('keydown', keyDownFunction)
    }, []);

    let size = 11;
    let board = Array(size).fill().map((_, y_key) => 
        <div style={{ display: "flex", flexDirection: "row"}} key={y_key}>
        {new Array(size).fill().map((_, x_key) => <div key={x_key}>
            <BoardTile whatColor = {whatColorFunction(x_key, y_key) }/></div>)}</div>)
    return (
        <div>
            {board}
        </div>
    )
}

export default Board;