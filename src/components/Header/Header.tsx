import styles from './Header.module.scss'
import iconSVG from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <section className={styles['header-content']}>
        <img src={iconSVG} className={styles['icon-name']}/>
        <div className={styles['score']}>
          <h2 className={styles['title']}>SCORE</h2>
          <span className={styles['points']}>12</span>
        </div>
      </section>
    </header>
  )
}