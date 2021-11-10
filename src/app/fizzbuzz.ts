/**
 * The fizzbuzz function should work as describes on the wikipedia page:
 * https://en.wikipedia.org/wiki/Fizz_buzz
 * @param num number to be checked
 * @returns The number or a string:
 *            * fizz if the number is divisible by 3
 *            * buzz if the number is divisible by 5
 *            * fizzbuzz if the number is divisible by 3 and 5
 */
export function fizzbuzz(num: number): number | 'fizz' | 'buzz' | 'fizzbuzz' {
    if (num % 15 === 0) {
        return 'fizzbuzz';
    }
    if (num % 3 === 0) {
        return 'fizz';
    }
    if (num % 5 === 0) {
        return 'buzz';
    }
    return num;
}
