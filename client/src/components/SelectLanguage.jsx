import classNames from 'classnames/bind'

import styles from './styles/SelectLanguage.module.scss'

const cx = classNames.bind(styles)

function SelectLanguage() {
  return (
    <select className={cx('container')} name="language" id="language">
      <option value="English">English</option>
      <option value="Tiếng Việt">Tiếng Việt</option>
    </select>
  )
}

export default SelectLanguage
