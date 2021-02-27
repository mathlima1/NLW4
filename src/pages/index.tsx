import { BarraExperiencia } from "../components/BarraExperiencia";
import { Contador } from "../components/Contador";
import { DesafioCompleto } from "../components/DesafioCompleto";
import { Perfil } from '../components/Perfil';
import { CaixaDesafio } from "../components/CaixaDesafio";
import { CountdownProvider } from "../Contexts/CountdownContext";

import Head from 'next/head'
import { GetServerSideProps } from 'next';

import style from '../style/pages/Home.module.css';
import { ChallengeProvider } from "../Contexts/ChallengeContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props) {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>
        <Head>
          <title>Inicio | MoveIt</title>
        </Head>

        <BarraExperiencia />
        <CountdownProvider>
          <section>
            <div >
              <Perfil />
              <DesafioCompleto />
              <Contador />

            </div>
            <div>
              <CaixaDesafio />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengeProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}