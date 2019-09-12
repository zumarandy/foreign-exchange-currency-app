import React from "react";
import axios from "axios";
import { Container, Responsive, Segment, Card } from 'semantic-ui-react';

import AmountInput from '../components/AmountInput';
import CurrencyCard from '../components/CurrencyCard';
import AddCurrencyInput from '../components/AddCurrencyInput';

import { formatNumber } from '../utils/formatNumbers';
import currenciesName from '../utils/currenciesName.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChangeAmountInput: false,
      isAddCurrencyPressed: false,
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

        currencyArrTemp.sort();

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
    let isConverted = false;
    const { currenciesDisplay, toCurrency, amount } = this.state;
    
    for (let i = 0; i < currenciesDisplay.length; i++) {
      if(currenciesDisplay[i].currency === toCurrency) {
        isConverted = true;
        return;
      } 
    }
        
    if (!isConverted) {
      axios
        .get(`https://api.exchangeratesapi.io/latest?base=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`)
        .then(response => {
          const result = amount * response.data.rates[toCurrency];
          const currencyItem = {
            currency: toCurrency,
            value: result.toFixed(5),
            rate: response.data.rates[toCurrency],
            currencyName: currenciesName.currencyName[toCurrency]
          };
        
          this.setState({
            currenciesDisplay: [...this.state.currenciesDisplay, currencyItem],
            isAddCurrencyPressed : false,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  removeCurrency(currency) {
    this.setState({
      currenciesDisplay: this.state.currenciesDisplay.filter(item => item.currency !== currency),
    });
  }

  updateAllCurrencies() {
    const { currenciesDisplay, amount } = this.state;
    let currenciesDisplayUpdate = [];
    
    for(let i =0; i< currenciesDisplay.length; i++) {
      let currenciesDisplayTemp = currenciesDisplay[i];
      currenciesDisplayTemp.value = currenciesDisplayTemp.rate * amount;
      currenciesDisplayUpdate.push(currenciesDisplayTemp);
    }

    this.setState({ currenciesDisplay: currenciesDisplayUpdate });
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
              <Card.Group> 
                {this.state.currenciesDisplay.map((item, index) => (
                  <CurrencyCard 
                    key={item.currency}
                    currency={item.currency}
                    value={item.value}
                    rate={item.rate}
                    currencyName={item.currencyName}
                    onRemoveCurrency={() => this.removeCurrency(item.currency)}
                  />
                ))}
              </Card.Group>
              
              <h3>placeholder add more currency button here</h3>
              <AddCurrencyInput
                currencies={this.state.currencies}
                isAddCurrencyPressed={this.state.isAddCurrencyPressed}
                onAddCurrencyPressed={() => this.setState({ isAddCurrencyPressed: true })}
                handleAddCurrency={(event, { value }) => this.setState({ toCurrency: value })}
                toCurrencyValue={this.state.toCurrency}
                onAddCurrency={() => this.addCurrency()}
              />
            </Segment>
          </Segment.Group>
        </Responsive>
      </Container> 
    );
  }
}

export default Home;
