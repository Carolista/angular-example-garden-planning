export function alphabetize(array: any[], property: string) {
  return array.sort((a: any, b: any) => a[property] > b[property] ? 1 : -1);
}

// TODO #3: add capitalize(str) function
