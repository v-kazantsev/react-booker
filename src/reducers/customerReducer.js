import createReducer from 'utils/createReducer';
import { asyncActionStarted, asyncActionFinished, asyncActionError } from 'actions/asyncActions';
import {
  CUSTOMER_CREATE_STARTED,
  CUSTOMER_CREATE_FINISHED,
  CUSTOMER_CREATE_ERROR,
  CUSTOMER_LOGGED_IN,
  CUSTOMER_DATA_FETCH_STARTED,
  CUSTOMER_DATA_FETCH_FINISHED,
  CUSTOMER_DATA_FETCH_ERROR,
  CUSTOMER_LOGGED_OUT
} from 'store/constants';

const initialState = {
  customer: {},
}

export const loginCustomer = (state = initialState, payload) => {
  return payload
};

export default createReducer(initialState,{
  [CUSTOMER_LOGGED_IN]: loginCustomer,
});

