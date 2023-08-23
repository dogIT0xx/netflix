import classNames from 'classnames/bind'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './DropDown.module.scss'

const cx = classNames.bind(styles)

function DropDown() {
  const [show, setShow] = useState(false)

  return (
    <div className={cx('container')}>
      <div
        className={cx('label')}
        onClick={() => {
          setShow(!show)
        }}
      >
        Original Language
        <span className={cx('arrow')}></span>
      </div>
      {show && (
        <div className={cx('menu')}>
          <ul className={cx('menu__list')}>
            <li className={cx('menu__item')}>
              <Link to="#">Original Language</Link>
            </li>
            <li className={cx('menu__item')}>
              <Link to="#">Dubbing</Link>
            </li>
            <li className={cx('menu__item')}>
              <Link to="#">Subtitle</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown
