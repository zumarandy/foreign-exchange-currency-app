import React from "react";
import axios from "axios";
import { Container, Responsive, Segment, Card } from 'semantic-ui-react';

import AmountInput from '../components/AmountInput';

import { formatNumber } from '../utils/formatNumbers';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      isChangeAmountInput: false,
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

  keyPressAmountInput(event) {
    if (event.keyCode === 13) {
      this.setState({ isChangeAmountInput: false });
      this.updateAllCurrencies();
    }
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
              <AmountInput
                isChangeAmountInput={this.state.isChangeAmountInput}
                onChangeAmountInput={() => this.setState({ isChangeAmountInput: true })}
                onChangeAmount={event => this.setState({ amount: event.target.value })}
                onKeyPressChecker={event => this.keyPressAmountInput(event)}
                amount={formatNumber(this.state.amount)}
              />
              {this.state.isChangeAmountInput && <p style={{fontStyle: 'italic'}}> Enter to change amount </p>}
            </Segment>
            <Segment>
              <h3>placeholder currency result card</h3>
              <h3>placeholder add more currency button here</h3>
            </Segment>
          </Segment.Group>
        </Responsive>
      </Container> 
    );
  }
}

export default Home;
