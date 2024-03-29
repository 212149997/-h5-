/**
 * Tiny Date Format 时间格式化
 * @param { string } format Formatting strings (default: 'HH:mm:ss')
 * @param { string | number | Date } timestamp Timestamp or string date or date object (default: Date.now())
 */
export function tinyDateFormat(format = 'HH:mm:ss', timestamp = Date.now()) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = padStart(date.getMonth() + 1);
  const day = padStart(date.getDate());
  const week = date.getDay();
  const hours = date.getHours();
  const hours12 = hours % 12 || 12;
  const minutes = padStart(date.getMinutes());
  const seconds = padStart(date.getSeconds());
  const replacements = {
    YY: year.slice(-2),
    YYYY: year,
    M: oneDigit(month),
    MM: month,
    MMM: date.toLocaleString('default', { month: 'short' }),
    MMMM: date.toLocaleString('default', { month: 'long' }),
    D: oneDigit(day),
    DD: day,
    d: week ? week : 7,
    H: hours,
    HH: padStart(hours),
    h: hours12,
    hh: padStart(hours12),
    m: oneDigit(minutes),
    mm: minutes,
    s: oneDigit(seconds),
    ss: seconds,
  };
  const reg = /YY(?:YY)?|M{1,4}|D{1,2}|d|H{1,2}|h{1,2}|m{1,2}|s{1,2}/g;
  return format.replace(reg, (match) => replacements[match]);
}
