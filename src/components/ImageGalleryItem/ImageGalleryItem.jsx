import styles from 'styles.module.css'

export default function ImageGalleryItem ({picture}) {
    
    return(
        <li className={styles.ImageGalleryItem}>
            <img className={styles['ImageGalleryItem-image']}
            src={picture.webformatURL} alt=""/>
        </li>)
};