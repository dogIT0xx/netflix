import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './LoginFormMain.module.scss'
import { Button } from '~/components/common'

const cx = classNames.bind(styles)

function LoginFormMain() {
  return (
    <form className={cx('container')} action="post">
      <div className={cx('group')}>
        {/* <label className={cx('group__label')}>Email or phone number</label> */}
        <input
          className={cx('group__input')}
          type="email"
          placeholder="Email or phone number"
        ></input>
      </div>
      <div className={cx('group')}>
        {/* <label className={cx('group__label')}>Password</label> */}
        <input
          className={cx('group__input')}
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <Button
        className={cx('sign-in-btn')}
        text="Sign In"
        size="size-m"
        to="/login"
      />
      <div className={cx('help')}>
        <div className={cx('help__remember-me')}>
          <input type="checkbox" />
          <label>Remember me</label>
        </div>
        <Link to="/" className={cx('help__link')}>
          Need help?
        </Link>
      </div>
    </form>
  )
}

export default LoginFormMain
