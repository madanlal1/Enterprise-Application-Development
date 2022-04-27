import React from 'react';
import HOC from './HOC';

class OnClick extends React.Component{

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