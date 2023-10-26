import styles from 'styles.module.css'
import React, { Component } from 'react';
import {ImageModal} from 'components/Modal';

export default class ImageGalleryItem extends Component  {
    
    state = {
        isModalOpen: false,
      };
    
      openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
      closeModal = () => {
        this.setState({ isModalOpen: false });
      };
      render() {
        const { picture } = this.props;
        const { isModalOpen } = this.state;
        return (
          <>
            <li className={styles.ImageGalleryItem}>
                <img className={styles['ImageGalleryItem-image']}
                src={picture.webformatURL}
                alt={picture.tags}
                onClick={this.openModal}
               />
            </li> 
       
            <ImageModal
              isOpenModal={isModalOpen}
              largeImg={picture.largeImageURL}
              isCloseModal={this.closeModal}
              tags={picture.tags}
            />
          </>
        );
      }
};