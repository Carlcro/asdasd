import fnsFormat from 'date-fns/format';
import en from 'date-fns/locale/en';
import sv from 'date-fns/locale/sv';

const locales = {
  en,
  sv,
};

export function format(date, formatStr) {
  return fnsFormat(date, formatStr, { locale: locales[window.localeId] });
}
