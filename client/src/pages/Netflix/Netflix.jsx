import classNames from 'classnames/bind'

import styles from './Netflix.module.scss'
import { logo } from '~/assets/images'
import {
  SelectLanguage,
  Button,
  Footer,
  Main,
} from '~/pages/Netflix/components'

const cx = classNames.bind(styles)

function Netflix() {
  return (
    <div className={cx('background')}>
      <header className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="Netflix" />
        <div className={cx('right')}>
          <SelectLanguage className={cx('select-language')} />
          <Button
            className={cx('btn-sign-in')}
            text="Sign In"
            size="size-s"
          ></Button>
        </div>
      </header>
      <Main />
      <Footer></Footer>
    </div>
  )
}

export default Netflix
