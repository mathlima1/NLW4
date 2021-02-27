import { useContext } from 'react';
import { ChallengesContext } from '../Contexts/ChallengeContext';
import style from '../style/components/DesafioCompleto.module.css';

export function DesafioCompleto() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={style.desafioCompletoWrap}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}