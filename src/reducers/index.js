import { combineReducers } from 'redux';
import MessagesReducer from './messages_reducer';
import SelectedChannelReducer from './selected_channel_reducer';
//import any other reducers here as you create them

const rootReducer = combineReducers({
  messages: MessagesReducer,
  activeChannel: SelectedChannelReducer
})

export default rootReducer;
