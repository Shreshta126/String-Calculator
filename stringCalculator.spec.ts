import StringCalculator from './stringCalculator';

describe('StringCalculator', () => {
    let stringCalculator: StringCalculator;
    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });
});