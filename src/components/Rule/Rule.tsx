import styles from './Rule.module.scss'

interface Rule {
  name: string,
  isSelected: boolean,
  src: string,
}

export const Rule = ({ name, isSelected, src }: Rule) => {
  return (
    <div className={`${styles['rule']} ${styles[name] || ''} ${isSelected ? styles['selected'] : ''}`}>
      <div className={`${styles['rule-background']} ${src ? '' : styles['empty']}`}>
        <img src={src} className={styles['icon']}/>
      </div>
    </div>
  )
}

export default Rule;