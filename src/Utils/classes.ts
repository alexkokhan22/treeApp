export const classes = (
  ...args: Array<string | Record<string, boolean | undefined> | false>
): string => {
  const nextClasses: string[] = [];

  args.forEach((arg) => {
    if (arg === false) {
      return;
    }
    if (typeof arg === 'object') {
      Object.entries(arg).forEach(([key, value]) => {
        if (value) {
          nextClasses.push(key);
        }
      });
    }
    if (typeof arg === 'string') {
      nextClasses.push(arg);
    }
  });

  return nextClasses.join(' ');
};
