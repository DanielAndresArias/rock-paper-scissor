import styles from './RuleSelector.module.scss'
import Rule from '../Rule/Rule'
import iconRockSVG from '../../assets/icon-rock.svg'
import iconPaperSVG from '../../assets/icon-paper.svg'
import iconScissorSVG from '../../assets/icon-scissors.svg'
import BGTriangleSVG from '../../assets/bg-triangle.svg'


export const RuleSelector = () => {
  return (
    <main className={styles['rule-selector']}>
      {/* <img className={styles['bg-triangle']} src={BGTriangleSVG}/>
      <section className={styles['rule-selector-content']}>
        <Rule src={iconPaperSVG} name='paper'/>
        <Rule src={iconScissorSVG} name='scissor'/>
        <Rule src={iconRockSVG} name='rock'/>
      </section> */}
      <section className={styles['rule-selected']}>
        <div className={styles['picked']}>
          <h3 className={styles['title']}>You picked</h3>
          <Rule src={iconPaperSVG} name='paper' isSelected/>
        </div>
        <div className={styles['result']}>
          <h4>You lose</h4>
          <button>Play again</button>
        </div>
        <div className={styles['picked']}>
          <h3 className={styles['title']}>The house picked</h3>
          <Rule isSelected/>
        </div>
      </section>
    </main>
  )
}