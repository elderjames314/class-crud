function reverseArray<T>(arr: T[]): T[] {
    return arr.slice().reverse();
}

// Example usage:
console.log(reverseArray<number>([1, 2, 3, 4])); 
console.log(reverseArray<string>(["apple", "banana", "cherry"]));