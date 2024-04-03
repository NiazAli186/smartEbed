import React, { createContext, useContext, useState } from 'react';
import Progress from '../progressLouding/progress'; // Assuming this is the correct path to your Progress component

export const ProgressContext = createContext();

export const ProgressProvider = () => {
    const [progress, setProgress] = useState(false);

    const updateProgress = () => {
        setProgress(true); // Toggles the progress state
    };

    return (
        <ProgressContext.Provider value={{ progress, updateProgress }}>
            <Progress/>
        </ProgressContext.Provider>
    );
};

export const useProgress = () => useContext(ProgressContext);