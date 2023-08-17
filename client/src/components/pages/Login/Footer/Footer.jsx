import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import { SelectLanguage } from '~/components/common'

const cx = classNames.bind(styles)

const Links = [
  { id: 1, href: '/', content: 'FAQ' },
  { id: 2, href: '/', content: 'Help Center' },
  { id: 3, href: '/', content: 'Terms of Use' },
  { id: 4, href: '/', content: 'Privacy' },
  { id: 5, href: '/', content: 'Cookie Preferences' },
  { id: 6, href: '/', content: 'Corporate Information' },
]

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
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
      </div>
    </footer>
  )
}

export default Footer
