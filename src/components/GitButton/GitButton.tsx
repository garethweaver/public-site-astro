import type { ReactElement } from 'react'
import { isModalOpen } from '@stores/modalStore'
import styles from './GitButton.module.sass'

export default (props: {
  className?: string,
  children: ReactElement | ReactElement[] | string,
}) => {
  const handleClick = (): void => {
    // hide mobile menu with vanilla JS as it is not a react component
    const header = document.querySelector('[data-header-root]')
    header?.classList.contains('open') && header.classList.remove('open')
    // then open modal
    isModalOpen.set(true)
  }
  return (
    <button
      className={
        props.className
          ? `${props.className} ${styles.button}`
          : styles.button
      }
      onClick={handleClick}
      aria-label="Open Github modal"
      title="Open Github modal">
      {props.children}
    </button>
  )
}
