const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0, // Set minimumFractionDigits to 0
  maximumFractionDigits: 0, // Set maximumFractionDigits to 0
});

export function formatCurrency(number: number) {
  const formattedCurrency = CURRENCY_FORMATTER.format(number);
  const [currencySymbol, formattedAmount] = formattedCurrency.split(" ");
  return (
    <>
      {currencySymbol}
      {formattedAmount}
    </>
  );
}