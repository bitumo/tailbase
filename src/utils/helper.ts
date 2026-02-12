export function twApply(...classes: string[]): Record<string, {}> {
  return {
    [`@apply ${classes.join(" ")}`]: {},
  };
}
