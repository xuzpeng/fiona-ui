const combineClass = (...args: (string|undefined)[]) => {
  return args.filter(Boolean).join(' ');
}

export default combineClass;