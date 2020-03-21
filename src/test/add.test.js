const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);

    // if (result !== 7) {
    //     throw new Error(`you added 4 and 3. the result was ${result}. Expect 7`);
    // }
});

test('generate greeting', () => {
    const greeting = generateGreeting('Alice');
    expect(greeting).toBe('Hello Alice!')
});