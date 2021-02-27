import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import styles from '../style/components/Perfil.module.css'

export function Perfil() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.perfilContainer}>
            <img src="https://github.com/mathlima1.png" alt="Matheus Lima" />
            <div>
                <strong>Matheus de Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}