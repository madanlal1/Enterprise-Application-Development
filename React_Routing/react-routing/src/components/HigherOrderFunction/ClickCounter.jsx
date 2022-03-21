import { useState } from "react";

const ClickCounter = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + props.count);
    }

    return (
        <>
            <button onClick={increment}>You clicked {count} times</button>
        </>
    )
}

export default ClickCounter;