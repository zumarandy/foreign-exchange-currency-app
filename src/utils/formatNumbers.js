import numeral from 'numeral';

export const CURRENCY_FORMAT_THOUSAND = '0,0.00';
export const CURRENCY_FORMAT_HUNDRED = '0,0.0000';

export function formatNumber(n) {
  return `${numeral(n).format('0.0000')}`
}

export function formatCurrency(n) {
  if (n < 999) {
    return numeral(n).format(`${CURRENCY_FORMAT_HUNDRED}`);
  } else {
    return numeral(n).format(`${CURRENCY_FORMAT_THOUSAND}`);
  }
  
}




