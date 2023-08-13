import classNames from 'classnames/bind'

import styles from '../styles/CardFQA.module.scss'
import { plus } from '~/assets/icons'

const cx = classNames.bind(styles)

function CardFQA({ className, question, answer }) {
  return (
    <div className={cx(className, 'container')}>
      <button className={cx('btn-question')}>
        <span className={cx('question')}>{question}</span>
        <img className={cx('img')} src={plus} alt="" />
      </button>
      <h3 className={cx('answer')}>{answer}</h3>
    </div>
  )
}

export default CardFQA
