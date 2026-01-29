import {useEffect, useState} from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(() => {
        let interval = null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
    
    return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (unit) => String(unit).padStart(2, "0");

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>
                {formatTime(hours)}:
                {formatTime(minutes)}:
                {formatTime(seconds)}
            </h2>

            <button onClick={()=>setIsRunning(true)}>Start</button>
            <button onClick={()=>setIsRunning(false)}>Pause</button>
            <button onClick={()=>setTime(0)}>Reset</button>
        </div>
    );
}

export default StopWatch;
