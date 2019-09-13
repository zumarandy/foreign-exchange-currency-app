import axios from 'axios';

export function getCurrencyData() {
  return axios
          .get('https://api.exchangeratesapi.io/latest?base=USD')
          .then(response =>  {
            return response;
          })
          .catch(err => {
            console.log(err);
          });
}

export function getCurrencyConversion(toCurrency) {
  return axios
            .get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${toCurrency}`)
            .then(response => {
              return response;
            })
            .catch(err => {
              console.log(err);
            });
}