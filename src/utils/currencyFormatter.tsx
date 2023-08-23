const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatCurrency(number: number): string {
  const formattedCurrency = CURRENCY_FORMATTER.format(number)
  return formattedCurrency
}
