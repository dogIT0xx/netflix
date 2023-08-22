import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ className, text, icon, size = 'size-m', to }) {
  return (
    <Link to={to}>
      <button className={cx(className, size, 'container')}>
        {text && <span className={cx('text')}>{text}</span>}
        {icon && (
          <img className={cx('icon')} src={icon.src} alt={icon.alt}></img>
        )}
      </button>
    </Link>
  )
}

export default Button
