// Simple calculator in TypeScript
function calculate(a: number, b: number): void {
  console.log(`Addition: ${a + b}`);
  console.log(`Subtraction: ${a - b}`);
  console.log(`Multiplication: ${a * b}`);
  console.log(`Division: ${b !== 0 ? a / b : 'Cannot divide by zero'}`);
}

// Example usage
calculate(10, 5);