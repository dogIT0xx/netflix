import classNames from 'classnames/bind'

import styles from './PlaylistCard.module.scss'
import { MovieCard } from '~/components/common'

const cx = classNames.bind(styles)

function PlaylistCard({ apiMovies }) {
  return (
    <div className={cx('container')}>
      <div className={cx('title')}>Romantic TV Shows</div>
      <ul className={cx('slider')}>
        {/* {apiMovies.map((movie) => (
          <li className={cx('slider__item')} key={movie.id}>
            <MovieCard />
          </li>
        ))} */}
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
        <li className={cx('slider__item')}>
          <MovieCard />
        </li>
      </ul>
    </div>
  )
}

export default PlaylistCard
