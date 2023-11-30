import { emailValidation } from "./emailValidation";

describe('emailValidation', () => {
    it('should validate email in correct form', () => {
        const result = emailValidation('abc@cde.com');

        expect(result).toEqual(true);
    });

    it('should not validate email if not in correct form', () => {
        const result = emailValidation('abc.com');

        expect(result).toEqual(false);
    });

    it('should validate if email contains numbers', () => {
        const result = emailValidation('abc123@cde.com');

        expect(result).toEqual(true);
    });

    it('should validate if email contains special signs', () => {
        const result = emailValidation('a_bc-123@cde.com');

        expect(result).toEqual(true);
    });

    it('should validate if email is long', () => {
        const result = emailValidation('aBcdEf_ghiJkl-mnop@qrs.com');

        expect(result).toEqual(true);
    });
});
