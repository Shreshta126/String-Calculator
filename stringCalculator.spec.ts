import StringCalculator from './stringCalculator';

describe('StringCalculator', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    test('should return the sum of numbers in string without delimiters', () => {
        expect(stringCalculator.add("1\n2,3\n4\n5,6")).toBe(21);
    });
});