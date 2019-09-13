import numeral from 'numeral';

export const CURRENCY_FORMAT_THOUSAND = '0,0.00';
export const CURRENCY_FORMAT_HUNDRED = '0,0.0000';

export function formatNumber(number) {
  return `${numeral(number).format('0.0000')}`
}

export function formatCurrency(number) {
  if (number < 999) {
    return numeral(number).format(`${CURRENCY_FORMAT_HUNDRED}`);
  } else {
    return numeral(number).format(`${CURRENCY_FORMAT_THOUSAND}`);
  }
  
}




