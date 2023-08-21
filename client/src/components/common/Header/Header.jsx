import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import { logo, profile } from '~/assets/images'
import { search, bell } from '~/assets/icons'

const cx = classNames.bind(styles)

const navTabs = [
  {
    id: 1,
    href: '/',
    content: 'Home',
  },
  {
    id: 2,
    href: '/',
    content: 'TV Shows',
  },
  {
    id: 3,
    href: '/',
    content: 'Movies',
  },
  {
    id: 4,
    href: '/',
    content: 'New & Popular',
  },
  {
    id: 5,
    href: '/',
    content: 'My List',
  },
  {
    id: 6,
    href: '/',
    content: 'Browse by Languages',
  },
]

function Button() {
  return (
    <header className={cx('container')}>
      <img className={cx('logo')} src={logo} alt="Netflix"></img>
      <ul className={cx('tabbed-nav')}>
        {navTabs.map((tab) => (
          <li className={cx('nav-tab')} key={tab.id}>
            <a href={tab.href}>{tab.content}</a>
          </li>
        ))}
      </ul>
      <ul className={cx('left-nav')}>
        <li>
          <button className={cx('nav-btn', 'search')}>
            <img src={search} alt=""></img>
          </button>
        </li>
        <li>
          <button className={cx('nav-btn', 'notifications-menu')}>
            <img src={bell} alt=""></img>
          </button>
        </li>
        <li>
          <button className={cx('nav-btn', 'account-menu')}>
            <img src={profile} alt=""></img>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Button
