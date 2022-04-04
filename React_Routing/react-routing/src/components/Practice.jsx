import React from 'react';

class Practice extends React.Component{

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         messsage : "Hellow world"
    //     }
    // }

    // const [count, setCount] = useState();

    // function onIncrement() {
    //     setCount(count+1);
    // }

    // function onDecrement() {
    //     setCount(count-1);
    // }
    // changeText() {
    //     this.setState({
    //         messsage :"thank you for subscribe"
    //     })
    // }
render () {

    return (
        <>

            {/* // <div className="">
            //     <button onClick={onIncrement}>-</button>
            //     <FormControl type="" className=""/>
            //     <button onClick={onIncrement}>+</button>
            // </div> */}

            {/* <h1>{this.state.messsage}</h1>
            <button onClick={() => this.changeText()}>Subscribe</button> */}

            <h1>{this.props.name()}</h1>
        </>
    )
}
}
export default Practice;