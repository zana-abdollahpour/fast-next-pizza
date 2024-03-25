// formats an amount of currency in the desired style
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

// prettifies the date provided
export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

// calculates the time difference between two times in minutes
export function calcMinutesLeft(dateStr: string) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

// checks validity of a given phone number
export function isValidPhone(str: string) {
  // https://uibakery.io/regex-library/phone-number
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
}
