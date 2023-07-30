import React from 'react';
import styles from './ImageGrid.module.css';

const ImageGrid = ({ images }) => {
  return (
    <div className={styles.imageGrid}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
