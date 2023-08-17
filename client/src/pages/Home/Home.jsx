import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'

const cx = classNames.bind(styles)

function Home() {
  return (
    <MainLayout>
      <main>
        <div className={cx('hero-img')}></div>
      </main>
    </MainLayout>
  )
}

export default Home
