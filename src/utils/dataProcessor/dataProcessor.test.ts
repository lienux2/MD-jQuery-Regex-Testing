import { processData } from './dataProcessor';

describe('processData', () => {
    it('should sum all array numbers', () => {
        const result = [1, 2, 3, 4, 5].reduce((acc, num) => acc + num, 0);

        expect(result).toEqual(15);
    });

    it('should sum all array numbers when some of them are negative', () => {
        const result = [-5, 4, 1, 1, 5].reduce((acc, num) => acc + num, 0);

        expect(result).toEqual(6);
    });

    it('should return number, when only one number is provided', () => {
        const result = [35].reduce((acc, num) => acc + num, 0);

        expect(result).toEqual(35);
    });

    it('should sum all array numbers when some are zero', () => {
        const result = [1, 0, 5, 0, 4].reduce((acc, num) => acc + num, 0);

        expect(result).toEqual(10);
    });

    it('should sum all array numbers when some are decimal', () => {
        const result = [1, 2.5, 3, 4, 5.5].reduce((acc, num) => acc + num, 0);

        expect(result).toEqual(16);
    });

});