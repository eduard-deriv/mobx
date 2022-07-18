import React from 'react';
import counter from "../../store/counter";
import { observer } from "mobx-react-lite";
import classes from './styles.module.css'

const Counter = observer(() => {
    return (
        <div className={classes.root}>
            <div>
                {counter.count}
            </div>
            <div>
                <button onClick={() => counter.increase()}>Increase</button>
                <button onClick={() => counter.decrease()}>Decrease</button>
            </div>
        </div>
    );
});

export default Counter;