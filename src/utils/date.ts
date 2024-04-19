export function format(
  date: Date,
  lang: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions,
) {
  const formatter = new Intl.DateTimeFormat(lang, options);
  return formatter.format(date);
}
