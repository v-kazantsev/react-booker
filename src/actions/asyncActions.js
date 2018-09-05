import {
  ASYNC_ACTION_STARTED,
  ASYNC_ACTION_FINISHED,
  ASYNC_ACTION_ERROR
} from 'store/constants';

export const asyncActionStarted = () => (
  {type: ASYNC_ACTION_STARTED}
);

export const asyncActionFinished = () => (
  {type: ASYNC_ACTION_FINISHED}
);

export const asyncActionError = (error) => (
  {
    type: ASYNC_ACTION_ERROR,
    payload: error
  }
);