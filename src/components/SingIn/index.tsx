import {FaGithub} from 'react-icons/fa'
import {signIn, useSession,signOut} from 'next-auth/react'
import { FiX } from 'react-icons/fi'


import styles from './style.module.scss'

export function SingIn(){
    const session=useSession()
    let x=false
    if (session.status==='authenticated'){
        x=true
    }
    return x?(
        <button type="button"
        className={styles.singInButton}
        >
         <FaGithub color='white'/>
         {session.data.user.name}
        <FiX color="#7373" className={styles.closeIcon} onClick={()=>signOut()}/>
        </button>
        
    ):(
        <button type="button"
        className={styles.singInButton}
        onClick={()=>signIn('github')}
        >
         <FaGithub color='var(--yellow-500)'/>
            Sign in Github
        </button>
        
    );
}