import CONSTANTS from './david-slider.constants';
import images from '../image.mock';

const defaultState = {
  currentImageId: 0,
};

const previous = (state) => {
  let newState = 0;
  const lastImage = images.length - 1;

  if (lastImage && state.currentImageId !== 0) {
    newState = {
      ...state,
      currentImageId: state.currentImageId - 1,
    };
  }

  if (state.currentImageId === 0) {
    newState = {
      ...state,
      currentImageId: lastImage,
    };
  }

  return newState;
};

const next = (state) => {
  let newState = 0;
  const lastImage = images.length - 1;

  if (state.currentImageId <= lastImage) {
    newState = {
      ...state,
      currentImageId: state.currentImageId + 1,
    };
  }

  if (state.currentImageId === lastImage) {
    newState = {
      ...state,
      currentImageId: 0,
    };
  }

  return newState;
};

const davidSliderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.PREVIOUS: return previous(state);
    case CONSTANTS.NEXT: return next(state);

    default: return state;
  }
};

export default davidSliderReducer;
