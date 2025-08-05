type Shape = 'circle' | 'square';

function calculateArea(shape: Shape, size: number): number {
  if (shape === 'circle') {
    return Math.PI * size * size;
  } else if (shape === 'square') {
    return size * size;
  } else {
    throw new Error('Invalid shape');
  }
}

// Example usage
console.log(calculateArea('circle', 10)); // ~314.16