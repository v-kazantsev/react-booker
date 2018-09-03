import { SUBSCRIPTION_KEY } from '.secrets'

const doLogout = async (customerToken) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const targetUrl = `https://api-staging.booker.com/v4.1/customer/logout?access_token=${customerToken}&includeFieldValues=false`
  try {
    const response = await fetch(`${proxyUrl}${targetUrl}`,
   { 
     method: 'POST',
     headers: {
     "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
     },
  } 
  );
    if (!response.ok) {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export default doLogout;