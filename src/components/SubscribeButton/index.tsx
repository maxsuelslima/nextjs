import styles from './style.module.scss'

interface SubscribeButton{
    priceId:string
}

export function SubscribeButton({priceId}:SubscribeButton){return(
    <button
    type='button'
    className={styles.subscribeButton}
    >
        inscreva-se
    </button>
)
}