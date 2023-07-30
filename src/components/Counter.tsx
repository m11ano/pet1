import React, { useState } from 'react';
import classes from './Counter.module.scss';

console.log(classes);

const Counter = () => {
    const [count, setCount] = useState<number>(0);
    
    const increment = ()=>{
        setCount((prev)=>prev+1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment} className={classes.btn}>increment</button>
        </div>
    );
};

export default Counter;