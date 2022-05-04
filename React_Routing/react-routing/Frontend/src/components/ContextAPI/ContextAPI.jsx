import Parent from './Parent';
import { useState } from 'react';
import CounterContext from './CounterContext';

const ContextAPI = () => {
    
    const countState = useState(1);

    return (
        <CounterContext.Provider value={countState}>
        <Parent/>
        </CounterContext.Provider>
    )
}
export default ContextAPI;