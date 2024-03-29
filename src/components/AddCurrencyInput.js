import React from 'react';
import { Container, Button, Dropdown } from 'semantic-ui-react';

type Props = {
  isAddCurrencyPressed: boolean,
  currencies: Array<*>,
  toCurrencyValue: string,
  onAddCurrencyPressed: () => void,
  handleAddCurrency: () => void,
  onAddCurrency: () => void,
}

const AddCurrencyInput = (props: Props) => (
  <Container fluid style={{ marginTop:'15px'}}> 
    { props.isAddCurrencyPressed ? (
      <Button
        fluid
        as="div"
        labelPosition="left"
      >
      <Dropdown
        placeholder="Add More Currencies"
        fluid
        search
        selection
        options={props.currencies}
        value={props.toCurrencyValue}
        onChange={props.handleAddCurrency}
      />
      <Button
        content="Submit"
        color="green"
        onClick={props.onAddCurrency}
      />
      </Button>
    ) : (
      <Button
        fluid
        content='Add More Currency'
        icon="plus"
        labelPosition="left"
        color="green"
        onClick={props.onAddCurrencyPressed}
      />
    )}
  </Container>
);

export default AddCurrencyInput;