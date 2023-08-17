import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import { SelectLanguage } from '~/components/common'

const cx = classNames.bind(styles)

const Links = [
  { id: 1, href: '/', content: 'FAQ' },
  { id: 2, href: '/', content: 'Help Center' },
  { id: 3, href: '/', content: 'Account' },
  { id: 4, href: '/', content: 'Media Center' },
  { id: 5, href: '/', content: 'Investor Relations' },
  { id: 6, href: '/', content: 'Jobs' },
  { id: 7, href: '/', content: 'Ways to Watch' },
  { id: 8, href: '/', content: 'Terms of Use' },
  { id: 9, href: '/', content: 'Privacy' },
  { id: 10, href: '/', content: 'Cookie Preferences' },
  { id: 11, href: '/', content: 'Corporate Information' },
  { id: 12, href: '/', content: 'Contact Us' },
  { id: 13, href: '/', content: 'Speed Test' },
  { id: 14, href: '/', content: 'Legal Notices' },
  { id: 15, href: '/', content: 'Only on Netflix' },
]

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('heading')}>
        <a href="/">Questions? Contact us.</a>
      </div>
      <ul className={cx('grid-links')}>
        {Links.map((link) => (
          <li className={cx('grid-links__item')} key={link.id}>
            <a className={cx('grid-links__content')} href={link.href}>
              {link.content}
            </a>
          </li>
        ))}
      </ul>
      <SelectLanguage className={cx('select-language')} />
      <span className={cx('brand')}>Netflix Vietnam</span>
    </footer>
  )
}

export default Footer
