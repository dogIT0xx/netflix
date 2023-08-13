import classNames from 'classnames/bind'

import styles from '../styles/SelectLanguage.module.scss'
import { tv, mobile0819, devicePileVN, kids } from '~/assets/images'
import { Banner, FormGetStarted, FQA } from '~/pages/Netflix/components'

const cx = classNames.bind(styles)

function Main({ className }) {
  return (
    <main className={cx(className, 'container')}>
      <section className={cx('section-container')}>
        <div className={cx('content')}>
          <h1 className={cx('title')}>Unlimited movies, TV shows, and more</h1>
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
        <FQA />
        <FormGetStarted />
      </article>
    </main>
  )
}

export default Main
