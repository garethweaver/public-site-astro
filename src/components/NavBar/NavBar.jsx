import { useState, useEffect } from 'react'
import { menuItems } from '../../data/menu.js'
import Icon from '@components/Icon/Icon.jsx'
import styles from './NavBar.module.sass'

export default () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 0)

    const handleOnScroll = e =>
      setIsScrolled(e.target.documentElement.scrollTop)

    window.addEventListener('scroll', handleOnScroll)
    return () =>
      window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <header className={
      `${isScrolled ? styles.scrolled : ''}
      ${isMobileMenuOpen ? styles.open : ''}
      ${styles.NavBar}`
    }>
      <nav className={styles.inner}>
        <a
          aria-label="Go to homepage"
          className={styles.home}
          href="/">
          <Icon use="code" />
          garethweaver.com
        </a>
        <button
          aria-label="Toggle mobile menu open closed"
          className={styles.toggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Icon use="toggle" />
        </button>
        <div className={styles.menu}>
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  title={item.title}
                  href={item.href}
                  target="_blank">
                  <Icon use={item.icon} />
                  <span>
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={styles.background} />
    </header>
  )
}
