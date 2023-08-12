import classNames from 'classnames/bind'

import styles from './styles/Netflix.module.scss'
import { logo, tv, mobile0819, devicePileVN, kids } from '~/assets/images'
import {
  FormGetStarted,
  SelectLanguage,
  Button,
  Banner,
  Footer,
} from '~/components'

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
        <div className={cx('divider')}></div>
        <section>
          <Banner
            imgInfo={{ src: tv, alt: 'no image' }}
            text={{
              title: 'Enjoy on your TV',
              subTitle:
                'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
            }}
            positionText="left"
          />
        </section>
        <div className={cx('divider')}></div>
        <section>
          {' '}
          <Banner
            imgInfo={{ src: mobile0819, alt: 'no image' }}
            text={{
              title: 'Download your shows to watch offline',
              subTitle:
                'Save your favorites easily and always have something to watch.',
            }}
            positionText="right"
          />
        </section>
        <div className={cx('divider')}></div>
        <section>
          {' '}
          <Banner
            imgInfo={{ src: devicePileVN, alt: 'no image' }}
            text={{
              title: 'Watch everywhere',
              subTitle:
                'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            }}
            positionText="left"
          />
        </section>
        <div className={cx('divider')}></div>
        <section>
          {' '}
          <Banner
            imgInfo={{ src: kids, alt: 'no image' }}
            text={{
              title: 'Create profiles for kids',
              subTitle:
                'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
            }}
            positionText="right"
          />
        </section>
        <div className={cx('divider')}></div>

        <article>
          <FormGetStarted />
        </article>
      </main>

      <Footer></Footer>
    </div>
  )
}

export default Netflix
