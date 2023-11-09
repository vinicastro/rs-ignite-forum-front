import styles from './Avatar.module.css'

export function Avatar({ src, hasBorder=true }) {
    return (
        <img src={src} alt="" className={hasBorder ? styles.avataWithBorder : styles.avatar}/>
    )
}