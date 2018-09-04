import { SUBSCRIPTION_KEY, CLIENT_SECRET, CLIENT_ID } from '.secrets'

const getClientToken = () => {
  return new Promise((res, rej) => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://api-staging.booker.com/v5/auth/connect/token'

    fetch(`${proxyUrl}${targetUrl}`,
        { method: 'POST',
          headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
          },
          body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&scope=customer`
      }) // end of fetch
      .then (response => {
        response.json()
        .then(data => {
          res (data)
        })
      .catch(error => rej(error))
      })//end of response
  })
};

export default getClientToken;