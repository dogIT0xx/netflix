import classNames from 'classnames/bind'

import styles from './MainLayout.module.scss'
import { Header, Footer } from '~/components/common'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
  return (
    <div className={cx('background')}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
