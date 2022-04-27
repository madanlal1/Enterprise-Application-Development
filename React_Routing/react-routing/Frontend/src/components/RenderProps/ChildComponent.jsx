import React from 'react';

class ChildComponent extends React.Component {

    constructor (props) {
        super(props)

    }
   
    render() {

        return  (
            <button onClick={() => this.props.greetFun("Child Component")}>Greet</button>
        )
    }
    }
export default ChildComponent;
