export const SET_ACTIVE_MENU = 'SET_ACTIVE_MENU';

export const setActiveMenu = (itemName) => ({
  type: SET_ACTIVE_MENU,
  payload: itemName,
});
