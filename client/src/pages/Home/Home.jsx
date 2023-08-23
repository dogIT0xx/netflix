import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'
import { PlaylistCard, BillBoard, DropDown } from '~/components/common'

const cx = classNames.bind(styles)

function Home() {
  return (
    <MainLayout>
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
        <li>
          <PlaylistCard />
        </li>
        <li>
          <DropDown />
        </li>
      </ul>
    </MainLayout>
  )
}

export default Home
