import classNames from 'classnames/bind'

import styles from './styles/FormGetStared.module.scss'
import { Button } from '~/components'

const cx = classNames.bind(styles)

function FormGetStared() {
  return (
    <form className={cx('container')} action="">
      <p className={cx('title')}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className={cx('form-group')}>
        <input
          className={cx('input')}
          type="email"
          placeholder="Email address"
        />
        <Button
          text="Get Stared"
          icon={{ url: 'No', alt: '' }}
          size="size-l"
        ></Button>
      </div>
    </form>
  )
}

export default FormGetStared
