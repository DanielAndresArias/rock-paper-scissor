import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <section className={styles['header-content']}>
        <h1 className={styles['name']}>ROCK PAPER SCISSOR</h1>
        <div className={styles['score']}>
          <h2 className={styles['title']}>SCORE</h2>
          <span className={styles['points']}>12</span>
        </div>
      </section>
    </header>
  )
}