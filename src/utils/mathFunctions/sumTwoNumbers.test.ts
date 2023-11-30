import {add} from './sumTwoNumbers';

describe('add', () => {
  it('should sum two numbers', () => {
    const result = add(6, 8);

    expect(result).toEqual(14);
  });

  it('should sum two numbers, where one of them or both are zero', () => {
    const result = add(5, 0);

    expect(result).toEqual(5);
  });

  it('should sum two numbers, where of them is decimal number', () => {
    const result = add(3, 3.5);

    expect(result).toEqual(6.5);
  });

  it('should sum two numbers, where on of them is negative', () => {
    const result = add(-4, 7);

    expect(result).toEqual(3);
  });

  it('should sum two numbers, where both numbers are large', () => {
    const result = add(1200, 5755);

    expect(result).toEqual(6955);
  });
});
