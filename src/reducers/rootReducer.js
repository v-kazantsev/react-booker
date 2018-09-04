import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import customerReducer from 'reducers/customerReducer';
import clientReducer from 'reducers/clientReducer';
import asyncReducer from 'reducers/asyncReducer';

const rootReducer = combineReducers({
  form: formReducer,
  customer: customerReducer,
  clientToken: clientReducer,
  async: asyncReducer,
});

export default rootReducer;