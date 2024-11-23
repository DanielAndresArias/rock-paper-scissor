import styles from './Game.module.scss'
import { Header } from '../'
import { RuleSelector } from '../RuleSelector/RuleSelector'
import { useState } from 'react'

export const Game = () => {
  const [score, setScore] = useState(0)
  const [step, setStep] = useState('Initial')
  const onHandleScore = () => {
    setScore((score) => score++)
  }
  const onHandleStep = ({newStep}) => {
    setStep(() => newStep)
  }
  return (
    <section className={styles['game']}>
      <Header score={score}/>
      <RuleSelector onHandleScore={onHandleScore} onHandleStep={onHandleStep} step={step}/>
    </section>
  )
}
