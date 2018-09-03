import { SUBSCRIPTION_KEY } from '.secrets'

const getCustomerInfo = async (customerToken) => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const targetUrl = `https://api-staging.booker.com/v4.1/customer/customer/119671659?access_token=${customerToken}&includeFieldValues=false`
  try {
    const response = await fetch(`${proxyUrl}${targetUrl}`,
   { 
     headers: {
     "Ocp-Apim-Subscription-Key": `${SUBSCRIPTION_KEY}`
     },
  } 
  );
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    const {Customer} = json
    return Customer
  } catch (error) {
    console.log(error);
  }
}

export default getCustomerInfo;