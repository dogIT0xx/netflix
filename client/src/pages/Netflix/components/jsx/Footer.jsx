import classNames from 'classnames/bind'

import styles from '../styles/Footer.module.scss'
import { SelectLanguage } from '~/pages/Netflix/components'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('heading')}>
        <a href="/">Questions? Contact us.</a>
      </div>
      <div className={cx('group-grid')}>
        <ul className={cx('column')}>
          <li className={cx('column-item')}>
            <a href="/">FAQ</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Media Center</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Ways to Watch</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Cookie Preferences</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Speed Test</a>
          </li>
        </ul>
        <ul className={cx('column')}>
          <li className={cx('column-item')}>
            <a href="/">Help Center</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Investor Relations</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Terms of Use</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Corporate Information</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Legal Notices</a>
          </li>
        </ul>
        <ul className={cx('column')}>
          <li className={cx('column-item')}>
            <a href="/">Account</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Jobs</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Privacy</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Contact Us</a>
          </li>
          <li className={cx('column-item')}>
            <a href="/">Only on Netflix</a>
          </li>
        </ul>
      </div>
      <SelectLanguage className={cx('select-language')} />
      <span className={cx('brand')}>Netflix Vietnam</span>
    </footer>
  )
}

export default Footer
