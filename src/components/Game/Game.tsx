import styles from './Game.module.scss'
import { Header } from '../'

export const Game = () => {
  return (
    <section className={styles['game']}>
      <Header/>
      <main style={{ backgroundColor: 'green' }}>main</main>
      <footer style={{ backgroundColor: 'blue' }}>footer</footer>
    </section>
  )
}
