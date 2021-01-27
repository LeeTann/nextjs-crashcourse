import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDez</span> News
      </h1>
      <p className={styles.description}>Keep on coding</p>
    </div>
  )
}

export default Header
