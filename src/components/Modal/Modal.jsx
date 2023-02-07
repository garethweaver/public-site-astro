import { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { isModalOpen } from '@stores/modalStore'
import ModalContent from './ModalContent.jsx'
import styles from './Modal.module.sass'

export default () => {
  const $isModalOpen = useStore(isModalOpen)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if ($isModalOpen) {
      document.body.classList.add('no-scroll')
      const fetchData = async () => {
        const response = await fetch('https://git-profile-info.vercel.app')
        const json = await response.json()
        setUserData(json?.data?.user)
      }
      fetchData().catch(console.error)
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [$isModalOpen])

  return (
    <dialog
      className={styles.modal}
      open={$isModalOpen}>
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={() => isModalOpen.set(false)}>
          <svg height="24" width="24">
            <use href={`/icons/cross.svg#icon`} />
          </svg>
        </button>
        {userData
          ? <ModalContent userData={userData} />
          : (
            <div className={styles.loader}>
              <svg height="24" width="24">
                <use href={`/icons/github.svg#icon`} />
              </svg>
            </div>
          )
        }
      </div>
    </dialog>
  )
}
