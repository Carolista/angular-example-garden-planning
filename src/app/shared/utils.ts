export function alphabetize(array: any[], property: string) {
  return array.sort((a: any, b: any) => a[property] > b[property] ? 1 : -1);
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.slice(1);
}
