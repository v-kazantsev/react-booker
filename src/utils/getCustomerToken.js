import { SUBSCRIPTION_KEY, CLIENT_SECRET, CLIENT_ID } from '.secrets'

const getCustomerToken = () => {
  return new Promise((res, rej) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://api-staging.booker.com/v4.1/customer/customer/login'
    const data = {
      "LocationID": 32145,
      "Email": "jdoe@ya.ca",
      "Password": "mypassword123",
      "BrandID": 0,
      "client_id": `${CLIENT_ID}`,
      "client_secret": `${CLIENT_SECRET}`,
      "grant_type": ""
    }
  
      fetch(`${proxyUrl}${targetUrl}`,
        { method: 'POST',
          headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
          },
          body: JSON.stringify(data)
      }) // end of fetch
      .then (response => {
        response.json()
        .then(data => {
          const {access_token} = data
          res (access_token)
        })
      .catch(error => rej(error))
        
      })//end of response
  }); // end of promise
}

export default getCustomerToken;