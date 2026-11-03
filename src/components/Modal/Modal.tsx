import { useStore } from '@nanostores/react'
import { isModalOpen } from '@stores/modalStore'
import { useEffect, useRef, useState } from 'react'
import styles from './Modal.module.sass'
import type { GitProfileApiResponse, UserData } from './Modal.types'
import ModalContent from './ModalContent'

export default () => {
  const $isModalOpen: boolean = useStore(isModalOpen)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [hasErrored, setHasErrored] = useState<boolean>(false)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect((): (() => void) => {
    const closeModal = () => {
      document.body.classList.remove('no-scroll')
      if (dialog.current) dialog.current.close()
    }

    const closeFromKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        isModalOpen.set(false)
        closeModal()
      }
    }

    if ($isModalOpen) {
      document.body.classList.add('no-scroll')
      if (dialog.current) dialog.current.showModal()
      const fetchData = async () => {
        const response = await fetch('https://git-profile-info.vercel.app')
        const json: GitProfileApiResponse = await response.json()
        setUserData(json?.data?.user)
      }
      fetchData().catch(error => {
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
    <dialog ref={dialog} className={styles.modal}>
      <div className={styles.inner}>
        <button
          type="button"
          className={styles.close}
          onClick={() => isModalOpen.set(false)}
          aria-label="Close"
        >
          <svg height="24" width="24" aria-hidden="true">
            <use href={`/icons/cross.svg#icon`} />
          </svg>
        </button>
        {!hasErrored && userData && <ModalContent userData={userData} />}
        {!hasErrored && !userData && (
          <div className={styles.loader}>
            <svg
              height="24"
              width="24"
              role="img"
              aria-label="Loading GitHub profile"
            >
              <use href={`/icons/github.svg#icon`} />
            </svg>
          </div>
        )}
        {hasErrored && (
          <div className={styles.loader}>
            <svg
              height="24"
              width="24"
              role="img"
              aria-label="Failed to load GitHub profile"
            >
              <use href={`/icons/cross.svg#icon`} />
            </svg>
          </div>
        )}
      </div>
    </dialog>
  )
}
