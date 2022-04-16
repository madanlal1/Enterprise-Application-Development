import React from 'react';
import { connect } from "react-redux";
import ADD_ONE from './actions/ADD_ONE';
import MINUS_ONE from './actions/MINUS_ONE';

function Counter(props) {

    const increment = () => {
        props.dispatch({type:ADD_ONE})
    }

    const decrement = () => {
        props.dispatch({type:MINUS_ONE})
    }

    return (
        <>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
            <label>Counter : {props.count}</label>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

const mapStateToProps = (state) => {

    return {count:state.count}
}

export default connect(mapStateToProps)(Counter);