export function chunk<T>(array: T[], size: number = 1): T[][] {
  const length = array.length;

  if (length < 1 || size < 1) {
    return [];
  }

  let index = 0;
  let resultIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resultIndex++] = array.slice(index, index += size);
  }

  return result;
}
