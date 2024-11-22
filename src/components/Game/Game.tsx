import styles from './Game.module.scss'
import { Header } from '../'
import { RuleSelector } from '../RuleSelector/RuleSelector'

export const Game = () => {
  return (
    <section className={styles['game']}>
      <Header/>
      <RuleSelector/>
    </section>
  )
}
