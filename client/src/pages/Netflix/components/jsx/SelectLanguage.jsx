import classNames from 'classnames/bind'

import styles from '../styles/SelectLanguage.module.scss'
import { globe, caretDown } from '~/assets/icons'

const cx = classNames.bind(styles)

function SelectLanguage({ className }) {
  return (
    <div className={cx(className, 'container')}>
      <img className={cx('left-icon')} src={globe} alt="" />
      <select name="language" id="language">
        <option value="English">English</option>
        <option value="Tiếng Việt">Tiếng Việt</option>
      </select>
      <img className={cx('right-icon')} src={caretDown} alt="" />
    </div>
  )
}

export default SelectLanguage
