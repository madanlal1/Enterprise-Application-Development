import { useContext } from "react";
import CounterContext from './CounterContext';

const Child = () => {

    const value = useContext(CounterContext);

    return (
        <>
        <h1>Context Counter value is : {value[0]}</h1>
        <button onClick={() => {value[1](++value[0])}}>Increment</button>
        <button onClick={() => {value[1](--value[0])}}>Decrement</button>
        </>
    )
}
export default Child;