import styles from './Rule.module.scss'

interface Rule {
  name: string,
  isSelected?: boolean,
  src: string,
  handleSelect: () => void,
}

export const Rule = ({ name, isSelected, src, handleSelect }: Rule) => {
  return (
    <div className={`${styles['rule']} ${styles[name] || ''} ${isSelected ? styles['selected'] : ''}`} onClick={handleSelect({src, name})}>
      <div className={`${styles['rule-background']} ${src ? '' : styles['empty']}`}>
        <img src={src} className={styles['icon']}/>
      </div>
    </div>
  )
}

export default Rule;