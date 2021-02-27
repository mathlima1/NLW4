import { useContext } from 'react';
import { CountdownContext } from '../Contexts/CountdownContext';
import style from '../style/components/Contador.module.css';




export function Contador() {
    const { minutos, segundos, hasFinished, isActive, resetaContagem, iniciaContagem } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutos).padStart(2, "0").split("");
    const [secondLeft, secondRight] = String(segundos).padStart(2, "0").split("");



    return (
        <div>
            <div className={style.contadorContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ?
                <button
                    disabled
                    className={style.contadorBotao}
                >
                    Ciclo encerrado
                    <img src="icons/level.svg" alt="" />
                </button>
                : (
                    <>
                        {isActive ? (
                            <button
                                onClick={resetaContagem}
                                type="button"
                                className={`${style.contadorBotao} ${style.contadorBotaoActive}`}
                            >
                                Abandonar ciclo
                            </button>
                        ) : (
                                <button
                                    onClick={iniciaContagem}
                                    type="button"
                                    className={style.contadorBotao}
                                >
                                    Iniciar um ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}