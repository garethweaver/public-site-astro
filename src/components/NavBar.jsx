import { useState, useEffect } from 'react'
import { menuItems } from '../data/menu.js'
import styles from './NavBar.module.sass'

export default () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsScrolled(document.documentElement.scrollTop > 0)

    const handleOnScroll = e =>
      setIsScrolled(e.target.documentElement.scrollTop)

    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return (
    <header className={
      `${isScrolled ? styles.scrolled : ''}
      ${isMobileMenuOpen ? styles.open : ''}
      ${styles.NavBar}`
    }>
      <nav className={styles.inner}>
        <a
          className={styles.home}
          href="/">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.53 13.47C8.82 13.76 8.82 14.24 8.53 14.53C8.38 14.68 8.19 14.75 8 14.75C7.81 14.75 7.62 14.68 7.47 14.53L5.47 12.53C5.18 12.24 5.18 11.76 5.47 11.47L7.47 9.47C7.76 9.18 8.24 9.18 8.53 9.47C8.82 9.76 8.82 10.24 8.53 10.53L7.06 12L8.53 13.47ZM13.69 9.96L11.69 14.63C11.57 14.91 11.29 15.08 11 15.08C10.9 15.08 10.8 15.06 10.71 15.02C10.33 14.86 10.15 14.42 10.32 14.03L12.32 9.36C12.48 8.98 12.92 8.8 13.3 8.97C13.68 9.14 13.85 9.58 13.69 9.96ZM18.53 12.53L16.53 14.53C16.38 14.68 16.19 14.75 16 14.75C15.81 14.75 15.62 14.68 15.47 14.53C15.18 14.24 15.18 13.76 15.47 13.47L16.94 12L15.47 10.53C15.18 10.24 15.18 9.76 15.47 9.47C15.76 9.18 16.24 9.18 16.53 9.47L18.53 11.47C18.82 11.76 18.82 12.24 18.53 12.53Z" fill="#FFFFFF"/>
          </svg>
          garethweaver.com
        </a>
        <button
          className={styles.toggle}
          onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen) }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.04953 19.8713C3.33953 20.2913 3.70953 20.6613 4.12953 20.9513C5.07953 21.6413 6.31953 22.0012 7.80953 22.0012H16.1895C19.6295 22.0012 21.7595 20.0612 21.9695 16.7812H2.01953C2.09953 18.0113 2.44953 19.0513 3.04953 19.8713Z" fill="#FFFFFF"/>
            <path d="M20.95 4.13C20.66 3.71 20.29 3.34 19.87 3.05C18.92 2.36 17.68 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V15.28H22V7.81C22 6.32 21.64 5.08 20.95 4.13ZM15.09 9.56L12.53 12.12C12.24 12.41 11.76 12.41 11.47 12.12L8.91 9.56C8.76 9.41 8.69 9.22 8.69 9.03C8.69 8.84 8.76 8.64 8.91 8.5C9.2 8.2 9.68 8.2 9.97 8.5L12 10.52L14.03 8.49C14.32 8.2 14.8 8.2 15.09 8.49C15.38 8.78 15.38 9.26 15.09 9.56Z" fill="#FFFFFF"/>
          </svg>
        </button>
        <div className={styles.menu}>
          <ul>
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank">
                  {item.title}
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
