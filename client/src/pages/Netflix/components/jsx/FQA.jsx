import classNames from 'classnames/bind'

import styles from '../styles/FQA.module.scss'
import { CardFQA } from '~/pages/Netflix/components'

const cx = classNames.bind(styles)

function FQA({ className, data }) {
  return (
    <>
      <ul className={cx(className, 'container')}>
        <span className={cx('title')}>Frequently Asked Questions</span>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
        <li className={cx('item')}>
          <CardFQA
            question="What is the Netflix"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

              You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
          />
        </li>
      </ul>
    </>
  )
}

export default FQA
