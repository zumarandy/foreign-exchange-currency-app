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
              <div>{props.currency}</div>
            </Grid.Column>
            <Grid.Column>
              <div>{props.value}</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Header>
      <Card.Meta>
        {props.currency} - {props.currencyName}
      </Card.Meta>
      <Card.Description>
        <h4>1 USD = {props.currency} {props.rate} </h4>
      </Card.Description>
    </Card.Content>
  </Card> 
);

export default CurrencyCard;