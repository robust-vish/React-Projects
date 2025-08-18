import React from 'react';
import useTodo from '../context/Context.js';
import {useState} from "react";
const Items = ({todo}) => {
    const[todomsg,setTodomsg] = useState(todo.title);
    return (
        <div>
        <div>Todo:-{todomsg}</div>
        </div>
    );
};

export default Items;