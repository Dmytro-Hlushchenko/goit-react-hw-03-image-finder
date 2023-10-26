
import ImageGalleryItem from "components/ImageGalleryItem"
import styles from 'styles.module.css'

export default function ImageGallery ({pictures}) {
  return(
    <ul className={styles.ImageGallery}>
      {
        pictures.map(item => (
        <ImageGalleryItem 
          key = {item.id}
          picture={item}>
        </ImageGalleryItem>))
        }
        
    </ul>
  )
  };