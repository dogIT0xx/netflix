import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from '../styles/LoginForm.module.scss'
import { LoginFormMain } from '~/pages/Login/components'

const cx = classNames.bind(styles)

function LoginForm() {
  return (
    <div className={cx('container')}>
      <h1 className={cx('title')}>Sign In</h1>

      <LoginFormMain />

      <div className={cx('orther')}>
        <div>
          <span>New to Netflix</span>
          <Link to="/">Sign up now</Link>
        </div>
        <div>
          <span>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          <Link to="/">Learn more.</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
