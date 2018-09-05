import createReducer from 'utils/createReducer';
import { CUSTOMER_CREATED, CUSTOMER_LOGGED_IN, CUSTOMER_LOGGED_OUT } from 'store/constants';

const initialState = {
  customerInfo: {},
  account: {},
  isAuthed: false,
}

export const loginCustomer = (state = initialState, payload) => {
  return {...state, customerInfo: payload, isAuthed: true}
};

export const createCustomer = (state = initialState, payload) => {
  return {...state, account: payload}
}

export const logoutCustomer = (state = initialState) => {
  return {...state, isAuthed: false, customerInfo: {}}
}

export default createReducer(initialState,{
  [CUSTOMER_LOGGED_IN]: loginCustomer,
  [CUSTOMER_CREATED]: createCustomer,
  [CUSTOMER_LOGGED_OUT]: logoutCustomer,
});

