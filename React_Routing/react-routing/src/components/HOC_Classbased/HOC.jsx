import React, {Component} from 'react';

const HOC = (OriginalComponent) => 
{
    const Obj =  class MyComp extends Component {

        constructor(props) {
        
            super(props)
    
            this.state = {
                count:0
            }

            this.hoverHandle = this.hoverHandle.bind(this);
        }
        
        hoverHandle () {
            this.setState(prestate => {
                return {count:prestate.count+1};
            })
        }

        render() {
            return (
                <>
                <OriginalComponent counts={this.state.count} hoverHandle={this.hoverHandle} /> 
                </>
            )
        }
    }
    return Obj;
}
export default HOC;
