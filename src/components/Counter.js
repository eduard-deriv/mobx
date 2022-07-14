import React from 'react';
import store from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div>
            <div>
                {store.count}
            </div>
            <div>
                <button onClick={() => store.increase()}>Increase</button>
                <button onClick={() => store.decrease()}>Decrease</button>
            </div>
        </div>
    );
});

export default Counter;