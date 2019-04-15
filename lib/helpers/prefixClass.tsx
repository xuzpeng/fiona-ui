export default (prefix: string) => {
  return (...args: (string | undefined)[]) => {
    return [`${prefix}`, ...args].filter(Boolean).join('-');
  }
};