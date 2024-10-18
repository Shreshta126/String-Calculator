import StringCalculator from './stringCalculator';

describe('StringCalculator', () => {
    let stringCalculator: StringCalculator;

    beforeEach(() => {
        stringCalculator = new StringCalculator();
    });

    test('should return 0 for an empty string', () => {
        expect(stringCalculator.add("")).toBe(0);
    });

    test('should return the sum of numbers in string with comma seperated numbers', () => {
        expect(stringCalculator.add("1,2,3,4")).toBe(10);
    });

    test('should return the sum of numbers in string with new line character', () => {
        expect(stringCalculator.add("1\n2,3\n4\n5,6")).toBe(21);
    });

    test('should return the sum of numbers in string with delimiter', () => {
        expect(stringCalculator.add("//[;]\n1;2;3;4;5;6")).toBe(21);
    });

    test('should return the sum of numbers in string with delimiters', () => {
        expect(stringCalculator.add("//[;][%]\n1;2%3%4;5;6")).toBe(21);
    });

    test('should return the sum of numbers in string with repeated delimiters', () => {
        expect(stringCalculator.add("//[;][%%][::]\n1;2%%3%%4;5;6")).toBe(21);
    });

    test('should return the sum of numbers in string with all repeated delimiters', () => {
        expect(stringCalculator.add("//[;;][%%][::]\n1;;2%%3%%4;;5;;6")).toBe(21);
    });
});