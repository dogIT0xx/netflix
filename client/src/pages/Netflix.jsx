import classNames from 'classnames/bind'

import styles from './styles/Netflix.module.scss'
import logo from '~/assets/images/logo.png'
import { FormGetStared, Banner, Button } from '~/components'

const cx = classNames.bind(styles)

function Netflix() {
  return (
    <div>
      <header className={cx('header')}>
        <img className={cx('logo')} src={logo} alt="Netflix" />
        <div>
          <select
            className={cx('select-language')}
            name="language"
            id="language"
          >
            <option value="English">English</option>
            <option value="Tiếng Việt">Tiếng Việt</option>
          </select>
          <Button className={cx('btn-sign-in')} text="Sign In"></Button>
        </div>
      </header>

      <main>
        <section className={cx('section-container')}>
          <div className={cx('content')}>
            <h1 className={cx('title')}>
              Unlimited movies, TV shows, and more
            </h1>
            <p className={cx('sub-title')}>Watch anywhere. Cancel anytime.</p>
            <FormGetStared />
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </div>
  )
}

export default Netflix
