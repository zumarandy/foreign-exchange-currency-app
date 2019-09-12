import numeral from 'numeral';

export function formatNumber(n) {
  return `${numeral(n).format('0.0000')}`
}