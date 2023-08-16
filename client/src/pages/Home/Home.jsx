import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { MainLayout } from '~/layouts'

const cx = classNames.bind(styles)

function Home() {
  return <MainLayout></MainLayout>
}

export default Home
