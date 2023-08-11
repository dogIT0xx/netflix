import classNames from 'classnames/bind'

import styles from './styles/Button.module.scss'

const cx = classNames.bind(styles)

function Button({ className, text, icon, size = 'size-m', primary }) {
  return (
    <button className={cx(className, size, 'container')}>
      <span className={cx('text')}>{text}</span>
      {icon && <img className={cx('icon')} src={icon.src} alt={icon.alt}></img>}
    </button>
  )
}

export default Button
