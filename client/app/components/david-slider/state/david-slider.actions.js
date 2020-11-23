import CONSTANTS from './david-slider.constants';

export const next = () => ({
  type: CONSTANTS.NEXT,
});

export const previous = () => ({
  type: CONSTANTS.PREVIOUS,
});

export default {
  next,
  previous,
};
