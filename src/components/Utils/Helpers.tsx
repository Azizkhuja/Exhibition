// Generates random year-month-day
export function getRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const convertToYearDate = new Date(timestamp);
  const convertToString = JSON.stringify(convertToYearDate);
  return convertToString.substring(1, 11);
}
