import React, {useState , useEffect} from 'react';

const Prac3 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    
    return () => clearInterval(timer);
    }, []);

return(
    <div>
        <div>
            <h1> Welcome to CHARUSAT!!!!</h1>
        </div>
        <div>
            <p>It is {currentTime.toLocaleDateString()}</p>
            <p>It is {currentTime.toLocaleTimeString()}</p>
        </div>
    </div>
);
}
export default Prac3;