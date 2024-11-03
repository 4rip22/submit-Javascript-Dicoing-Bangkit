import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { sum } from './index.js';

// Menguji penjumlahan dua bilangan positif
test('Sum of 3 and 4 should be 7', () => {
  assert.strictEqual(sum(3, 4), 7);
});

// Menguji penjumlahan dengan salah satu bilangan nol
test('Sum of 0 and 5 should be 5', () => {
  assert.strictEqual(sum(0, 5), 5);
});
test('Sum of 5 and 0 should be 5', () => {
  assert.strictEqual(sum(5, 0), 5);
});

// Menguji penjumlahan dua bilangan negatif
test('Sum of -3 and -4 should be -7', () => {
  assert.strictEqual(sum(-3, -4), -7);
});

// Menguji penjumlahan dengan satu bilangan positif dan satu bilangan negatif
test('Sum of 10 and -5 should be 5', () => {
  assert.strictEqual(sum(10, -5), 5);
});
test('Sum of -10 and 5 should be -5', () => {
  assert.strictEqual(sum(-10, 5), -5);
});

// Menguji penjumlahan dua bilangan nol
test('Sum of 0 and 0 should be 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});
