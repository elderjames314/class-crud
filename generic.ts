function reverseArray<T>(arr: T[]): T[] {
  return [...arr].reverse();
}

// Example usage:
console.log(reverseArray<number>([1, 2, 3, 4])); // [4, 3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // ["c", "b", "a"]