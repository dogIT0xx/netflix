import classNames from 'classnames/bind'

import styles from './Main.module.scss'
import { tv, mobile0819, devicePileVN, kids } from '~/assets/images'
import { Banner, GetStartedForm, FQA } from '~/components/pages/Netflix'

const cx = classNames.bind(styles)

const apiBanner = [
  {
    id: 0,
    imgInfo: { src: tv, alt: 'no image' },
    text: {
      title: 'Enjoy on your TV',
      subTitle:
        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    },
  },
  {
    id: 1,
    imgInfo: { src: mobile0819, alt: 'no image' },
    text: {
      title: 'Download your shows to watch offline',
      subTitle:
        'Save your favorites easily and always have something to watch.',
    },
    positionText: 'right',
  },
  {
    id: 2,
    imgInfo: { src: tv, alt: 'no image' },
    text: {
      title: 'Enjoy on your TV',
      subTitle:
        'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    },
  },
  {
    id: 3,
    imgInfo: { src: devicePileVN, alt: 'no image' },
    text: {
      title: 'Watch everywhere',
      subTitle:
        'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    },
    positionText: 'left',
  },
  {
    id: 4,
    imgInfo: { src: kids, alt: 'no image' },
    text: {
      title: 'Create profiles for kids',
      subTitle:
        'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    },
    positionText: 'right',
  },
]

function Main({ className }) {
  return (
    <main className={cx(className, 'container')}>
      <section className={cx('section-card-hero')}>
        <div className={cx('card-hero')}>
          <div className={cx('card-hero__content')}>
            <h1 className={cx('card-hero__title')}>
              Unlimited movies, TV shows, and more
            </h1>
            <p className={cx('card-hero__sub-title')}>
              Watch anywhere. Cancel anytime.
            </p>
            <GetStartedForm />
          </div>
        </div>
      </section>
      <div className={cx('divider')}></div>

      {apiBanner.map((data) => (
        <section key={data.id} className={cx('section')}>
          <Banner
            key={data.id}
            imgInfo={data.imgInfo}
            text={data.text}
            positionText={data.positionText}
          />
          <div className={cx('divider')}></div>
        </section>
      ))}

      <article>
        <FQA />
        <GetStartedForm className={cx('form-get-started')} />
      </article>
      <div className={cx('divider')}></div>
    </main>
  )
}

export default Main
