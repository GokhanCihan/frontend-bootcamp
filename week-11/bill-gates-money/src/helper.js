 // separate thousands
export function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatReceiptNumber(num) {
  if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) + 'b';
  } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(num % 1_000_000 > 0 ? 1 : 0 ) + 'm';
  } else if (num >= 1_000) {
      return (num / 1_000).toFixed(num % 1_000 > 0 ? 1 : 0) + 'k';
  }
  return num.toString();
}