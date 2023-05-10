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
      const fetchData = async () => {
        const response = await fetch('https://git-profile-info.vercel.app')
        const json = await response.json()
        setUserData(json?.data?.user)
      }
      fetchData().catch(console.error)
    }
  }, [$isModalOpen])

  return (
    <dialog
      className={styles.modal}
      open={$isModalOpen}>
      <div className={styles.inner}>
        <button
          onClick={() => isModalOpen.set(false)}>
          Close
        </button>
        {userData
          ? <ModalContent userData={userData} />
          : 'loading...'
        }
      </div>
    </dialog>
  )
}
