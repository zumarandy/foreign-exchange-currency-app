import React from "react";
import axios from "axios";
import { Container, Responsive, Segment, Card } from 'semantic-ui-react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "AUD",
      amount: 10,
      currencies: [],
      currenciesDisplay : []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => {
        const currencyArrTemp = [];
        const currencyArr = [];
        
        for (const key in response.data.rates) {
          currencyArrTemp.push(key);
        }

        for (let key = 0; key < currencyArrTemp.length; key++) {
            currencyArr.push({'key': currencyArrTemp[key], 'value': currencyArrTemp[key], 'text': currencyArrTemp[key]});
        }
    
        this.setState({ currencies: currencyArr });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addCurrency() {
    
  }

  removeCurrency() {
    
  }

  updateAllCurrencies() {
    
  }
    
  render() {
    return ( 
      <Container fluid>
        <Responsive as={Container} style={{padding: '5% 15%'}}>
          <h1 style={{fontStyle: 'italic'}}>
            Foreign Exchange Currency
          </h1>
          <Segment.Group>
            <Segment>
              <h3 style={{fontStyle: 'italic'}}>
                USD - United States Dollars
              </h3>
              //input amount Here
            </Segment>
            <Segment>
              //currency exchange here
              //add more currency button here
            </Segment>
          </Segment.Group>
        </Responsive>
      </Container> 
    );
  }
}

export default Home;
