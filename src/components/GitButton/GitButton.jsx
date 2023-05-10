import { useStore } from '@nanostores/react'
import { isModalOpen } from '@stores/modalStore'

import styles from './GitButton.module.sass'

export default props => {
  const handleClick = () => isModalOpen.set(true)

  return (
    <button
      className={
        props.className
          ? `${props.className} ${styles.button}`
          : styles.button
      }
      onClick={handleClick}>
      {props.children}
    </button>
  )
}
