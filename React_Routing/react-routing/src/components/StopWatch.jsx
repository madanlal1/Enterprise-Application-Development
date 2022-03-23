import {useState} from 'react';

const StopWatch = () => {

    const [time, setTime] = useState(0);

    return (
        <>
        <h1>{time}</h1>
        <button onClick={setInterval(() => setTime(time+1),1000)}>Start Timer</button>
        <button onClick={clearInterval(setTime)}>Stop Timer</button>
        <button onClick={setTime(0)}>Reset</button>
        </>
    )
}
export default StopWatch;