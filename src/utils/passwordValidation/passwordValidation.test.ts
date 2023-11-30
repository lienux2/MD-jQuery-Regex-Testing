import { passwordValidation } from './passwordValidation';

describe('passwordValidation', () => {
    it('should not validate password that is less than 8 char ', () => {
        const result = passwordValidation('afhurjk');

        expect(result).toEqual(false);
    });

    it('should validate password when one or more special char are used', () => {
        const result = passwordValidation('f$ghvbg*n1j');

        expect(result).toEqual(true);
    });

    it('should validate password when one or more numbers are used', () => {
        const result = passwordValidation('f2ghv%b3gn1j');

        expect(result).toEqual(true);
    });

    it('should validate password when there are upercase letters', () => {
        const result = passwordValidation('f2gHv*b3gN1j');

        expect(result).toEqual(true);
    });

    it('should validate password when it is long', () => {
        const result = passwordValidation('AbCd$e1f2g3AbCd$e1f2g3AbCd$e1f2g3AbCd$e1f2g3');

        expect(result).toEqual(true);
    });
});
