import classNames from 'classnames/bind'

import styles from './styles/Button.module.scss'

const cx = classNames.bind(styles)

function Button({ text, icon, size = 'size-m', primary }) {
  return (
    <button className={cx('container', size)}>
      <span className={cx('text')}>{text}</span>
      {icon && <img className={cx('icon')} src={icon.src} alt={icon.alt}></img>}
    </button>
  )
}

export default Button
