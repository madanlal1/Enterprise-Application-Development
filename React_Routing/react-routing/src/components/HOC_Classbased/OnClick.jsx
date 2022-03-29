import React from 'react';
import HOC from './HOC';

class OnClick extends React.Component{

    constructor(props)
    {  
         super(props)
    }
    render(){
        return (
            <div style={{display:'grid', justifyContent:'center', textAlign:'center'}}>
            <p>{this.props.counts}</p> 
            <button onClick={() => this.props.hoverHandle()}>Click</button>
            </div>
        )
    }
}
export default HOC(OnClick);