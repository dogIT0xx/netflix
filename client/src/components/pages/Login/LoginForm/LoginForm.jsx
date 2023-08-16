import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './LoginForm.module.scss'
import { LoginFormMain } from '~/components/pages/Login'

const cx = classNames.bind(styles)

function LoginForm() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>Sign In</h1>

      <LoginFormMain />

      <div className={cx('other')}>
        <div className={cx('sign-up-now')}>
          <span className={cx('sign-up-now__span')}>New to Netflix?</span>
          <Link className={cx('sign-up-now__link')} to="/">
            Sign up now
          </Link>
        </div>
        <div className={cx('recaptcha')}>
          <span className={cx('recaptcha__span')}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          <Link className={cx('recaptcha__link')} to="/">
            Learn more.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
