import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'
import { PlaylistCard, BillBoard } from '~/components/common'

const cx = classNames.bind(styles)

function Home() {
  return (
    <MainLayout>
      <main>
        <BillBoard />
        <ul className={cx('play-lists')}>
          <li>
            <PlaylistCard />
          </li>
          <li>
            <PlaylistCard />
          </li>
          <li>
            <PlaylistCard />
          </li>
        </ul>
      </main>
    </MainLayout>
  )
}

export default Home
