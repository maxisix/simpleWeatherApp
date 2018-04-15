export const convertTemp = kelvin => {
  return parseInt((kelvin - 273.15) * 1.8 + 32.0, 10);
};
