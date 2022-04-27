import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {

    constructor (props) {
        super(props)
        this.state={
            message : "Parent"
        }
    }

   Greeting =(child_comp) => {
      alert(`Hellow ${this.state.message} from ${child_comp}`)
   }

    render() {

        return  (
            <ChildComponent greetFun={this.Greeting}/>
        )
    }
    }
export default ParentComponent;
