import { SET_ACTIVE_MENU } from '../../actions/ui/sidebarActions';

const initialState = {
  activeMenu: null,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_MENU:
      return {
        ...state,
        activeMenu: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
