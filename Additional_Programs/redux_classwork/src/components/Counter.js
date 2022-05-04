import React, {useState} from 'react';
import { connect } from "react-redux";
import ADD_ONE from './actions/ADD_ONE';
import MINUS_ONE from './actions/MINUS_ONE';
import '../index.css';

function Counter(props) {

    const [day, setDay] = useState(true);
    const [morning, setMorning] = useState(true);

    const increment = () => {
        props.dispatch({type:ADD_ONE})  
    }

    const decrement = () => {
        props.dispatch({type:MINUS_ONE})
    }

    return (
        <>
            <div className={`${day ? 'dayLight' : 'nightLight'}`}> 
            <h1>Counter</h1>
            <h2>Mode : Good {morning ? "Day" : "Night"} </h2>
            
            <button onClick={increment}>Increment</button>
            <label>Counter : {props.count}</label>
            <button onClick={decrement}>Decrement</button> <br/><br/>
            <button onClick={()=> {setDay(!day); setMorning(!morning);}}>Day/Night</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {

    return {count:state.count}
}

export default connect(mapStateToProps)(Counter);