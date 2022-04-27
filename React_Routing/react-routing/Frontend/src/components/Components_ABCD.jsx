import { useState } from "react";

const ComponentA = () => {
    return (
        <>
            <h1>Component - A</h1>
            <ComponentB />
        </>
    )
}

const ComponentB = () => {
    return (
        <>
            <h1>Component - B</h1>
            <ComponentC />
        </>
    )
}

const ComponentC = () => {
    return (
        <>
            <h1>Component - C</h1>
            <ComponentD />
        </>
    )
}

const ComponentD = () => {
    return (
        <>
        {/* <StudentConsumer> */}
        {/* {std => {return ( */}
            {/* <> */}
                <h1>Component - D</h1>
                {/* <span>My name is {std.name} and my score is {std.score}.</span> */}
            {/* </> */}
        {/* )}} */}

        {/* </StudentConsumer> */}
        </>
    )
}



const Components_ABCD = () => {

    const [student, setStudent] = useState({name:'Madan', score:"99"});

    return (
        <>
        {/* <StudentProvider value={student} > */}
            <ComponentA />
        {/* </StudentProvider> */}
        </>
    )
}

export default Components_ABCD;