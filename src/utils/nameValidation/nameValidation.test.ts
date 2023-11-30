import { nameValidation } from './nameValidation';

describe('nameValidation', () => {
    it('should not pass validation when input is less than 2 chars', () => {
        const result = nameValidation('a');

        expect(result).toEqual(false);
    });

    it('should pass validation when input is 10 chars', () => {
        const result = nameValidation('jpoiujklmnb');

        expect(result).toEqual(true);
    });

    it('should not pass validation when input is chars and numbers', () => {
        const result = nameValidation('jugh5hjmb');

        expect(result).toEqual(false);
    });

    it('should not pass validation when input is more than 50 chars', () => {
        const result = nameValidation('poiuytrewqasdfghjklmnbvcxqazxswedcvfrtgbnhyujmkioluih');

        expect(result).toEqual(false);
    });

    it('should pass validation when input has lowecase and uppercase letters', () => {
        const result = nameValidation('FGHjjj');

        expect(result).toEqual(true);
    });
});

