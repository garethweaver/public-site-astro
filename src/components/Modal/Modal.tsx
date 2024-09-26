import { useEffect, useState, useRef } from 'react'
import { useStore } from '@nanostores/react'
import { isModalOpen } from '@stores/modalStore'
import ModalContent from './ModalContent'
import type { UserData, GitProfileApiResponse } from './Modal.types'
import styles from './Modal.module.sass'

export default () => {
  const $isModalOpen: boolean = useStore(isModalOpen)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [hasErrored, setHasErrored] = useState<boolean>(false)
  const dialog = useRef<HTMLDialogElement>(null)

  const closeFromKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      isModalOpen.set(false)
      closeModal()
    }
  }

  const closeModal = () => {
    document.body.classList.remove('no-scroll')
    if (dialog.current) dialog.current.close()
  }

  useEffect((): () => void => {
    if ($isModalOpen) {
      document.body.classList.add('no-scroll')
      if (dialog.current) dialog.current.showModal()
      const fetchData = async () => {
        const response = await fetch('https://git-profile-info.vercel.app')
        const json: GitProfileApiResponse = await response.json()
        setUserData(json?.data?.user)
      }
      fetchData().catch((error) => {
        setHasErrored(true)
        console.error(error)
      })
      window.addEventListener('keydown', closeFromKeyDown)
    } else {
      closeModal()
    }
    return () => window.removeEventListener('keydown', closeFromKeyDown)
  }, [$isModalOpen])

  return (
    <dialog
      ref={dialog}
      className={styles.modal}>
      <div className={styles.inner}>
        <button
          className={styles.close}
          onClick={() => isModalOpen.set(false)}>
          <svg height="24" width="24">
            <use href={`/icons/cross.svg#icon`} />
          </svg>
        </button>
        {!hasErrored && userData &&
          <ModalContent userData={userData} />
        }
        {!hasErrored && !userData &&
          <div className={styles.loader}>
            <svg height="24" width="24">
              <use href={`/icons/github.svg#icon`} />
            </svg>
          </div>
        }
        {hasErrored &&
          <div className={styles.loader}>
            <svg height="24" width="24">
              <use href={`/icons/cross.svg#icon`} />
            </svg>
          </div>
        }
      </div>
    </dialog>
  )
}
