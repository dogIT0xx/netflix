import classNames from 'classnames/bind'

import styles from '../styles/FormGetStarted.module.scss'
import { Button } from '~/pages/Netflix/components'
import { chevronRight } from '~/assets/icons'

const cx = classNames.bind(styles)

function FormGetStarted({ className }) {
  return (
    <form className={cx(className, 'container')} action="">
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
          text="Get Started"
          icon={{ src: chevronRight, alt: 'no image' }}
          size="size-l"
        ></Button>
      </div>
    </form>
  )
}

export default FormGetStarted
