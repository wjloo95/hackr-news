import { actionTypes } from './actions';

const getInitialState = () => ({ theme: 'dark', layout: 'list' });

const app = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.SET_THEME:
      return { ...state, ...payload };
    case actionTypes.SET_LAYOUT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default app;
