import classNames from 'classnames/bind'

import styles from '../styles/Header.module.scss'
import { logo } from '~/assets/images'
import { SelectLanguage } from '~/pages/Netflix/components'
import { Button } from '~/components'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('container')}>
      <img className={cx('logo')} src={logo} alt="Netflix" />
      <div className={cx('right')}>
        <SelectLanguage className={cx('select-language')} />
        <Button
          className={cx('btn-sign-in')}
          text="Sign In"
          size="size-s"
          to="/login"
        ></Button>
      </div>
    </header>
  )
}

export default Header
