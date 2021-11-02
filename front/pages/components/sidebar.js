import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Envio de arquivo</a>
      </Link>
      <Link href="/list">
        <a>Listagem </a>
      </Link>
  
    </nav>
  )
}