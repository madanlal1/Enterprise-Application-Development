import CounterReducer from "./CounterReducer";
import {useReducer} from 'react';

const Child2 = () => {

    const [state, dispatch] = useReducer(CounterReducer, 1)

    console.log(state);

    return (
        <>
            <h1>Reducer Counter value is : {state}</h1>
            <button onClick={()=> dispatch('INCREMENT')}>Increment</button>
            <button onClick={()=> dispatch('DECREMENT')}>Decrement</button>
        </>
    )
}
export default Child2;