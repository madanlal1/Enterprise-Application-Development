import React from 'react';
import HOC from './HOC';

class OnHover extends React.Component{

    render(){
        return (
            <div style={{display:'grid', justifyContent:'center', textAlign:'center'}}>
            <p>{this.props.counts}</p> 
            <button onMouseOver={() => this.props.hoverHandle()}>Hover</button>
            </div>
        )
    }
}
export default HOC(OnHover);