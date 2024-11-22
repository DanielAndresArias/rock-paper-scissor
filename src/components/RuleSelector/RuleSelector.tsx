import styles from './RuleSelector.module.scss'
import Rule from '../Rule/Rule'
import iconRockSVG from '../../assets/icon-rock.svg'
import iconPaperSVG from '../../assets/icon-paper.svg'
import iconScissorSVG from '../../assets/icon-scissors.svg'
import BGTriangleSVG from '../../assets/bg-triangle.svg'


export const RuleSelector = () => {
  return (
    <main className={styles['rule-selector']}>
      <img className={styles['bg-triangle']} src={BGTriangleSVG}/>
      <section className={styles['rule-selector-content']}>
        <Rule src={iconPaperSVG} name='paper'/>
        <Rule src={iconScissorSVG} name='scissor'/>
        <Rule src={iconRockSVG} name='rock'/>
      </section>
    </main>
  )
}