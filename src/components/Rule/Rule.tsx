import styles from './Rule.module.scss'

interface Rule {
  name: string,
  src: string,
}

export const Rule = ({ name, src }: Rule) => {
  return (
    <div className={`${styles['rule']} ${styles[name]}`}>
      <div className={styles['rule-background']}>
        <img src={src} className={styles['icon']}/>
      </div>
    </div>
  )
}

export default Rule;