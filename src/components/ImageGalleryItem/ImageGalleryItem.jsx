import styles from 'styles.module.css'
import Modal from 'components/Modal'

export default function ImageGalleryItem ({picture}) {
    
    return(
        <li className={styles.ImageGalleryItem}>
            <img className={styles['ImageGalleryItem-image']}
            src={picture.webformatURL} alt=""/>
            <Modal
                
            >

            </Modal>
        </li>)
};