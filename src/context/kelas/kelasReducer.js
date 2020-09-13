import { ADD_KELAS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_KELAS:
      return {
        ...state,
        kelas: [action.payload, ...state.kelas],
      };

    default:
      return state;
  }
};
