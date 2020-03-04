import types from './actionTypes';

const { RESET } = types;

const reset = () => ({
  type: RESET,
});

export {
  reset,
};
