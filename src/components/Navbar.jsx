import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <ul className={styles.links_list}>
          <NavLink to="/" className={styles.brand} activeClassName={styles.active}></NavLink>
          <NavLink to="/login" className={styles.brand} activeClassName={styles.active}>
          <li>Login</li>
          </NavLink>
          <NavLink to="/register" className={styles.brand} activeClassName={styles.active}></NavLink>
          <li>Registrar</li>
          <button className={styles.exit}>Exit</button>
      </ul>
    </nav>
    </>
  )
}

export default Navbar
