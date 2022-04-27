import { useState } from "react";

const HoverCounter = (props) => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + props.count);
    }

    return (
        <>
            <h1 onMouseOver={increment}>You Hovered {count} times</h1>
        </>
    )
}

export default HoverCounter;