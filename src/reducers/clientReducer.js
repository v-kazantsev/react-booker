import createReducer from 'utils/createReducer';
import {CLIENT_TOKEN_FETCHED} from 'store/constants';

const initialState = {
  clientToken: {}
};

export const fetchClientToken = (state, payload) => payload.token;

export default createReducer(initialState, {
  [CLIENT_TOKEN_FETCHED]: fetchClientToken
});