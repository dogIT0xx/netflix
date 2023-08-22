import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'
import { PlaylistCard, Button, BillBoard } from '~/components/common'

const cx = classNames.bind(styles)

function Home() {
  return (
    <MainLayout>
      <main>
        <BillBoard />
        <PlaylistCard />
      </main>
    </MainLayout>
  )
}

export default Home
