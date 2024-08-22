import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }){
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("TIMER");
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);
    
    useEffect(() => {
        console.log("INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => (prevTime - 100));
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return <progress value={remainingTime} max={timeout} id="question-time" />
}