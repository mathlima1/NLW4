import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengeContext";

interface CountdownContextData {
    minutos: number;
    segundos: number;
    hasFinished: boolean;
    isActive: boolean;
    iniciaContagem: () => void;
    resetaContagem: () => void
}

interface ContdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let contagemFinalizada: NodeJS.Timeout;

export function CountdownProvider({ children }: ContdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const cicle = 25;
    const [time, setTime] = useState(cicle * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    function iniciaContagem() {
        setIsActive(true);
    }
    function resetaContagem() {
        setIsActive(false);
        setTime(cicle * 60);
        setHasFinished(false);
        clearTimeout(contagemFinalizada);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            contagemFinalizada = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            minutos,
            segundos,
            hasFinished,
            isActive,
            iniciaContagem,
            resetaContagem,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}