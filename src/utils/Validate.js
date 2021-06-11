import * as _ from 'lodash';
export const checkEmail = value => value && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,3})+$/g.test(value) ? 1 : 0;
export const required_trim = value => value && _.startsWith(value, ' ') || _.endsWith(value, ' ') ? 0 : 1;
export const minLenght8 = value => value && value.length >= 8 ? 1 : 0;
export const isPhoneNumber = value => value && /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/g.test(value) ? 1 : 0
export const removeFromArray = (original, remove) => {
  return original.filter(value => !remove.includes(value._id));
}