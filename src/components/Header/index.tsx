import { SingIn } from '../SingIn'
import styles from './style.module.scss'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ignews" />
                <nav>
                    <a >Home</a>
                    <a className={styles.active}>Posts</a>
                </nav>
                <SingIn/>
            </div>
        </header>

    )
}