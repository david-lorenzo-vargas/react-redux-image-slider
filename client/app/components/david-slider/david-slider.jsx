import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as ownActions } from './state';

import styles from './david-slider.scss';
import images from './image.mock';
import Dot from '../dot';

const DavidSlider = (props) => {
  const { actions, currentImageId } = props;

  const handlePreviousButtonClick = () => {
    actions.previous();
  };

  const handleNextButtonClick = () => {
    actions.next();
  };

  return (
    <div className={styles.slider}>
      <div className={styles.button} onClick={handlePreviousButtonClick}>
        <span className={styles['button-icon']}>&#10094;</span>
      </div>
      <div className={styles.column}>
        <div className={styles.image}>
          {images.map((item) => (
            currentImageId === item.id ? <img src={item.url} alt="" /> : ''))}
        </div>
        <div className={styles.dots}>
          {images.map((item) => (
            <Dot active={currentImageId === item.id ? 'active' : ''} />
          ))}
        </div>
      </div>
      <div className={styles.button} onClick={handleNextButtonClick}>
        <span className={styles['button-icon']}>&#10095;</span>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => ({
  currentImageId: store.davidSlider.currentImageId,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ownActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DavidSlider);
