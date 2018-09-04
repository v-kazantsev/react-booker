import React from 'react';
import { Redirect } from 'react-router';
import {
 
  CUSTOMER_LOGGED_IN
  
} from 'store/constants';
import { asyncActionStarted, asyncActionFinished, asyncActionError } from 'actions/asyncActions';
import doLogin from 'utils/doLogin';

export const loginCustomer = (customer) => {
  return {
      type: CUSTOMER_LOGGED_IN,
      payload: {
        customer
      }
    }
};

const doRedirect = () => {
  return <Redirect to='./home' />
}

export const getCustomerToken = (email, password) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStarted())
      const customer = await doLogin(email, password)
      dispatch(loginCustomer(customer))
      dispatch(asyncActionFinished())
      dispatch(doRedirect())
      
    } catch (error) {
      console.log(error)
      dispatch(asyncActionError())
      dispatch(loginCustomer({customer: 'default'}))
    }
  }
}

