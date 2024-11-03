import { strict as assert } from 'node:assert';
import sum from './index.js';

// Menulis pengujian untuk berbagai skenario

// 1. Menguji penjumlahan dengan dua bilangan positif
assert.strictEqual(sum(3, 4), 7, 'Sum of 3 and 4 should be 7');

// 2. Menguji penjumlahan dengan salah satu bilangan 0
assert.strictEqual(sum(0, 5), 5, 'Sum of 0 and 5 should be 5');
assert.strictEqual(sum(5, 0), 5, 'Sum of 5 and 0 should be 5');

// 3. Menguji penjumlahan dengan kedua bilangan 0
assert.strictEqual(sum(0, 0), 0, 'Sum of 0 and 0 should be 0');

// 4. Menguji penjumlahan dengan salah satu bilangan negatif
assert.strictEqual(sum(-3, 4), 0, 'Sum of -3 and 4 should be 0 because negative numbers return 0');
assert.strictEqual(sum(4, -3), 0, 'Sum of 4 and -3 should be 0 because negative numbers return 0');

// 5. Menguji penjumlahan dengan kedua bilangan negatif
assert.strictEqual(sum(-3, -4), 0, 'Sum of -3 and -4 should be 0 because negative numbers return 0');

// 6. Menguji penjumlahan dengan argumen bukan bilangan (misalnya, string atau undefined)
assert.strictEqual(sum('3', 4), 0, 'Sum of "3" and 4 should be 0 because non-numeric values return 0');
assert.strictEqual(sum(3, '4'), 0, 'Sum of 3 and "4" should be 0 because non-numeric values return 0');
assert.strictEqual(sum(undefined, 5), 0, 'Sum of undefined and 5 should be 0 because non-numeric values return 0');
assert.strictEqual(sum(5, undefined), 0, 'Sum of 5 and undefined should be 0 because non-numeric values return 0');
assert.strictEqual(sum(null, 5), 0, 'Sum of null and 5 should be 0 because non-numeric values return 0');
assert.strictEqual(sum(5, null), 0, 'Sum of 5 and null should be 0 because non-numeric values return 0');

console.log('All tests passed!');
