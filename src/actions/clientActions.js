import { CLIENT_TOKEN_FETCHED } from 'store/constants';
import { asyncActionStarted, acyncActionFinished, asyncActionError } from 'actions/asyncActions';
import getClientToken from 'utils/getClientToken';

export const fetchClientToken = (token) => {
  return {
    type: CLIENT_TOKEN_FETCHED,
    payload: token
  }
}

export const loadClientToken = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarted())
      const clientToken = await getClientToken()
      dispatch(fetchClientToken(clientToken))
      dispath(asyncActionFinished())
    } catch (error) {
        console.log(error)
        dispatch(asyncActionError())
    }
  }
}
