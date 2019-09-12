import React from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';

type Props = {
  currency: string,
  value: string,
  rate: string,
  currencyName: string,
  onRemoveCurrency: () => void,
};

const CurrencyCard = (props: Props) => (
  <Card fluid>
    <Card.Content>
      <Button
        negative
        icon="x"
        floated= "right"
        color="red"
        onClick={props.onRemoveCurrency}
      />
      <Card.Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <h3>{props.currency}</h3>
            </Grid.Column>
            <Grid.Column>
              <h3 style={{textAlign:'right'}}>{props.value}</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Header>
      <Card.Meta style={{fontStyle:'italic',fontWeight: 'bold'}}>
        {props.currency} - {props.currencyName}
      </Card.Meta>
      <Card.Description style={{fontStyle:'italic'}}>
        <h4>1 USD = {props.currency} {props.rate} </h4>
      </Card.Description>
    </Card.Content>
  </Card> 
);

export default CurrencyCard;