import { multiply } from './multiplyTwoNumbers';

describe('multiply', () => {
    it('should multiply two numbers', () => {
        const result = multiply(2, 3);

        expect(result).toEqual(6);
    });

    it('should multiply two numbers, when one of them is 0', () => {
        const result = multiply(0, 3);

        expect(result).toEqual(0);
    });

    it('should multiply two numbers, when one of them is negative', () => {
        const result = multiply(-2, 3);

        expect(result).toEqual(-6);
    });

    it('should multiply two numbers, when one of them decimal', () => {
        const result = multiply(2.25, 4);

        expect(result).toEqual(9);
    });

    it('should multiply two numbers, when both are large', () => {
        const result = multiply(150, 250);

        expect(result).toEqual(37500);
    });
});