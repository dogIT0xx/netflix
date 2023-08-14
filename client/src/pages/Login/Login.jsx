import classNames from 'classnames/bind'

import styles from './Login.module.scss'
import { Header, LoginForm, Footer } from '~/pages/Login/components'

const cx = classNames.bind(styles)

function Login() {
  return (
    <div className={cx('background')}>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}

export default Login
