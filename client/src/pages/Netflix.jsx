import classNames from 'classnames/bind'

import styles from './styles/Netflix.module.scss'
import { logo } from '~/assets/images'
import { FormGetStarted, SelectLanguage, Button } from '~/components'

const cx = classNames.bind(styles)

function Netflix() {
  return (
    <>
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

      <main>
        <section className={cx('section-container')}>
          <div className={cx('content')}>
            <h1 className={cx('title')}>
              Unlimited movies, TV shows, and more
            </h1>
            <p className={cx('sub-title')}>Watch anywhere. Cancel anytime.</p>
            <FormGetStarted />
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <footer></footer>
    </>
  )
}

export default Netflix
