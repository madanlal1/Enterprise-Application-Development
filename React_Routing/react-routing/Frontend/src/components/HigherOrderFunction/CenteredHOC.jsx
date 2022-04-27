import React from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class NewComponent extends React.Component {

    render () {
        
        return (
            <>
                <ClickCounter count={5} />
                <HoverCounter count={2} />
            </>
        )
    }
}

export default NewComponent;