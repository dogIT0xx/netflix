import classNames from 'classnames/bind'

import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const apiLinks = [
  { id: 1, href: '/', content: 'Audio Description' },
  { id: 2, href: '/', content: 'Help Center' },
  { id: 3, href: '/', content: 'Gift Cards' },
  { id: 4, href: '/', content: 'Media Center' },
  { id: 5, href: '/', content: 'Investor Relations' },
  { id: 6, href: '/', content: 'Jobs' },
  { id: 7, href: '/', content: 'Terms of Use' },
  { id: 8, href: '/', content: 'Privacy' },
  { id: 9, href: '/', content: 'Legal Notices' },
  { id: 10, href: '/', content: 'Cookie Preferences' },
  { id: 11, href: '/', content: 'Corporate Information' },
  { id: 12, href: '/', content: 'Contact Us' },
]

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('social-links')}>
        <a href="/">
          <img src="" alt="" />
        </a>
        <a href="/">
          <img src="" alt="" />
        </a>
        <a href="/">
          <img src="" alt="" />
        </a>
        <a href="/">
          <img src="" alt="" />
        </a>
      </div>
      <ul className={cx('grid-links')}>
        {apiLinks.map((link) => (
          <li className={cx('grid-links__item')} key={link.id}>
            <a className={cx('grid-links__content')} href={link.href}>
              {link.content}
            </a>
          </li>
        ))}
      </ul>
      <button className={cx('service-code-btn')}>Service Code</button>
      <span className={cx('copy-right')}>© 1997-2023 Netflix, Inc.</span>
    </footer>
  )
}

export default Footer
