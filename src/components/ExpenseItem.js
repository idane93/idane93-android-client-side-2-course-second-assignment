import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    //const [amount, setAmount] = useState(props.amount);
    //const [date, setDate] = useState(props.date);

    useEffect(() => {
        setTitle(props.title);
    }, [props.title]);

    const clickHandler = () => {
        setTitle('Updated!');
    }

    const clickHandlerServer = () => { //there isnt actual server this is jusr for the example
        fetch('http://localhost:3000/addToMongo/' + title + '/' + props.amount + '/' + props.date).catch((error) => console.log(error));
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">{title}</div>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={clickHandlerServer}>add to server</button>
        </Card>
    )
}