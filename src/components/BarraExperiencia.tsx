import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import styles from '../style/components/BarraExperiencia.module.css';

export function BarraExperiencia() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    return (
        <header className={styles.barraExperiencia}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />

                <span className={styles.experienciaGanha} style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}