import { CUSTOMER_CREATED, CUSTOMER_LOGGED_IN, CUSTOMER_LOGGED_OUT } from 'store/constants';
import { asyncActionStarted, asyncActionFinished, asyncActionError } from 'actions/asyncActions';
import doLogin from 'utils/doLogin';
import doLogout from 'utils/doLogout';
import getClientToken from 'utils/getClientToken';
import createAccount from 'utils/createAccount';

export const loginCustomer = (customer) => {
  return {
      type: CUSTOMER_LOGGED_IN,
      payload: {
        customer
      }
    }
};

export const createCustomer = (account) => {
  return {
    type: CUSTOMER_CREATED,
    payload: {
      account
    }
  }
}

export const logoutCustomer = () => {
  return {
    type: CUSTOMER_LOGGED_OUT
  }
}

export const customerLogout = (token) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarted())
      doLogout(token)
      dispatch(logoutCustomer())
      dispatch(asyncActionFinished())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}

export const createCustomerAccount = (data) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarted())
      const clientToken = await getClientToken()
      const {access_token} = clientToken
      const customerAccount = await createAccount(data, access_token)
      dispatch(createCustomer(customerAccount))
      dispatch(asyncActionFinished())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}

export const getCustomerToken = (email, password) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarted())
      const customer = await doLogin(email, password)
      dispatch(loginCustomer(customer))
      dispatch(asyncActionFinished())
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
    }
  }
}

