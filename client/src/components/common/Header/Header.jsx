import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import { logo } from '~/assets/images'
import { search } from '~/assets/icons'

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
        <li className={cx('nav-element')}>
          <button className={cx('nav-element__btn', 'search')}>
            <img src={search} alt=""></img>
          </button>
        </li>
        <li className={cx('nav-element')}>
          <button className={cx('nav-element__btn', 'notifications-menu')}>
            <img src={search} alt=""></img>
          </button>
        </li>
        <li className={cx('nav-element')}>
          <button className={cx('nav-element__btn', 'account-menu')}>
            <img src={search} alt=""></img>
          </button>
        </li>
      </ul>
    </header>
  )
}

export default Button
