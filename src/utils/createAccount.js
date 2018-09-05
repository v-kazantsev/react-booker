import { SUBSCRIPTION_KEY } from '.secrets'

const createAccount = (data, accessToken) => {
  const {password, firstName, lastName, homePhone, cellPhone, email, gender, street, city, state, zip, country} = data
  return new Promise((res, rej) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://api-staging.booker.com/v4.1/customer/customer/account'
    const data = {
      "Password": `${password}`,
      "LocationID": 32145,
      "FirstName": `${firstName}`,
      "LastName": `${lastName}`,
      "HomePhone": `${homePhone}`,
      "CellPhone": `${cellPhone}`,
      "WorkPhone": "",
      "Email": `${email}`,
      "GUID": "",
      "AllowReceiveEmails": true,
      "AllowReceivePromotionalEmails": true,
      "AllowReceiveSMS": true,
      "MobilePhoneCarrierID": 1,
      "GenderID": parseInt(`${gender}`, 10),
      "RequireCustomerPhone": true,
      "RequireCustomerAddress": true,
      "access_token": `${accessToken}`,
      "Address": {
        "Street1": `${street}`,
        "Street2": "",
        "City": `${city}`,
        "State": `${state}`,
        "Zip": `${zip}`,
        "Country": {
          "ID": parseInt(`${country}`, 10),
          "Name": ""
        }
      }
    }
    console.log(data)
    fetch(`${proxyUrl}${targetUrl}`,
     { method: 'POST',
       headers: {
       "Content-Type": "application/json",
       "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
       },
       body: JSON.stringify(data)
    } 
    )
    .then (response => {
      console.log(response)
      response.json()
      .then(data => {
        res (data)
      })
    .catch(error => rej(error))
    })
  })
};

export default createAccount;