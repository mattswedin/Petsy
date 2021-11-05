import { combineReducers } from 'redux';

import modal_reducer from './modal_reducer';

const ui_reducer = combineReducers({
  modal: modal_reducer
});

export default ui_reducer;