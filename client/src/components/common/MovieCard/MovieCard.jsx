import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './MovieCard.module.scss'

const cx = classNames.bind(styles)

function MovieCard() {
  return <div className={cx('container')} onMouseOver={() => {}}></div>
}

export default MovieCard
