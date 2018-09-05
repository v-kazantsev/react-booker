import createReducer from 'utils/createReducer';
import {
  ASYNC_ACTION_STARTED,
  ASYNC_ACTION_FINISHED,
  ASYNC_ACTION_ERROR
} from 'store/constants';

const initialState = {
  isloading: false,
  error: '',
};

export const asyncActionStarted = state => ({...state, isLoading: true});

export const asyncActionFinished = state => ({...state, isLoading: false});

export const asyncActionError = (state, payload) => ({...state, isLoading: false, error: payload});

export default createReducer(initialState, {
  [ASYNC_ACTION_STARTED]: asyncActionStarted,
  [ASYNC_ACTION_FINISHED]: asyncActionFinished,
  [ASYNC_ACTION_ERROR]: asyncActionError
});