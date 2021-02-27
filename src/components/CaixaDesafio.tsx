import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengeContext";
import { CountdownContext } from "../Contexts/CountdownContext";
import style from "../style/components/CaixaDesafio.module.css";


export function CaixaDesafio() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetaContagem } = useContext(CountdownContext);
    function handleChallengeSucceeded() {
        completeChallenge();
        resetaContagem()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetaContagem()
    }

    return (
        <div className={style.caixaDesafioContainer}>
            {activeChallenge ?
                <div className={style.desafioAtivo}>
                    <header>
                        Ganhe {activeChallenge.amount} Xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p> {activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button onClick={handleChallengeFailed} type="button" className={style.challegeFailButton}> Falhei </button>
                        <button onClick={handleChallengeSucceeded} type="button" className={style.challegeCompleteButton}> Completei </button>
                    </footer>
                </div>
                : (
                    <div className={style.desafioNaoAtivo}>
                        <h3> Inicie um ciclo para receber desafios</h3>
                        <p>
                            <img src="icons/level-up.svg" alt="" />
                        Avance de level completando desafios
                    </p>
                    </div>
                )}
        </div>
    );
}