export const isEmpty: (val: any) => boolean = (val) => {
  const emptyValues = [undefined, '', null];
  return emptyValues.includes(val);
};

