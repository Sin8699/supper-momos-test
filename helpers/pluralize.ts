export const pluralize = (text: string, number: number, format?: (n: number) => string, custom = "") => {
  if (number === 1) return `${number} ${text}`;
  const n = format ? format(number) : number;
  if (custom) return `${n} ${custom}`;
  return `${n} ${text}s`;
};
