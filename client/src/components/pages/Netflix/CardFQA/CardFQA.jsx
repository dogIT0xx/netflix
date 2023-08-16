import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './CardFQA.module.scss'
import { plus } from '~/assets/icons'

const cx = classNames.bind(styles)

function CardFQA({ question, answer }) {
  const [showAnwser, setShowAnwser] = useState(false)
  const [rotatePlusIcon, setRotatePlusIcon] = useState(false)

  function handelBtnClick(event) {
    setRotatePlusIcon(!rotatePlusIcon)
    setShowAnwser(!showAnwser)
  }

  return (
    <div className={cx('container')}>
      <button className={cx('btn-question')} onClick={handelBtnClick}>
        <span className={cx('question')}>{question}</span>
        <img
          className={cx({
            'plus-icon': true,
            'plus-icon--rotate': rotatePlusIcon,
          })}
          src={plus}
          alt=""
        />
      </button>
      {showAnwser && <h3 className={cx('answer')}>{answer}</h3>}
    </div>
  )
}

export default CardFQA
