import styles from 'styles.module.css'
import React, { Component } from 'react';
import {ImageModal} from 'components/Modal';

export default class ImageGalleryItem extends Component  {
    
    state = {
        isModalOpen: false,
      };
    
  toggle = () => { 
    this.setState((prevState) => ({
        isModalOpen: !prevState.isModalOpen,
      })
    )
  }
      render() {
        const { picture } = this.props;
        const { isModalOpen } = this.state;
        return (
          <>
            <li className={styles.ImageGalleryItem}>
                <img className={styles['ImageGalleryItem-image']}
                src={picture.webformatURL}
                alt={picture.tags}
                onClick={this.toggle}
               />
            </li> 
       
            <ImageModal
              isOpenModal={isModalOpen}
              largeImg={picture.largeImageURL}
              isCloseModal={this.toggle}
              tags={picture.tags}
            />
          </>
        );
      }
};