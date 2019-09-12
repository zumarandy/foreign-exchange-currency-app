import React from 'react';
import { Container, Input, Button, Grid } from 'semantic-ui-react';

type Props = {
  isChangeAmountInput: boolean,
  amount: string,
  onChangeAmountInput: () => void,
  onChangeAmount: () => void,
  onKeyPressChecker: () => void
}

const AmountInput = (props: Props) => (
  <Container fluid>
    {
      props.isChangeAmountInput ? (
        <Input
          fluid
          focus
          type="number"
          placeholder="10.0000"
          onChange={props.onChangeAmount}
          onKeyDown={props.onKeyPressChecker}
        />
      ) : (
        <Button
          fluid
          onClick={props.onChangeAmountInput}
        >
          <Grid fluid="true" columns={2}>
                <Grid.Row>
                <Grid.Column>
            <h4>USD</h4>
                </Grid.Column>
                <Grid.Column>
              <h4>{props.amount}</h4>
                </Grid.Column>
                </Grid.Row>
              </Grid>
        </Button>
      )
    }
  </Container>
)

export default AmountInput;