import { useEffect } from 'react';

const CountDownTimer = ({ seconds, setSeconds, minutes, setMinutes, onFinished }) => {

    useEffect(() => {
        // Function to handle the countdown logic
        const interval = setInterval(() => {
            // Decrease seconds if greater than 0
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }

            // When seconds reach 0, decrease minutes if greater than 0
            if (seconds === 0) {
                if (minutes === 0) {
                    // Stop the countdown when both minutes and seconds are 0
                    clearInterval(interval);
                } else {
                    // Reset seconds to 59 and decrease minutes by 1
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000); // Run this effect every 1000ms (1 second)

        return () => {
            // Cleanup: stop the interval when the component unmounts
            clearInterval(interval);
        };
    }, [seconds]); // Re-run this effect whenever 'seconds' changes

    return (
        <span>
            {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </span>
    );
};

export default CountDownTimer;