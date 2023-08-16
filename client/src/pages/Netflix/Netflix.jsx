import classNames from 'classnames/bind'

import styles from './Netflix.module.scss'
import { Header, Main, Footer } from '~/components/pages/Netflix'

const cx = classNames.bind(styles)

function Netflix() {
  return (
    <div className={cx('background')}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Netflix
