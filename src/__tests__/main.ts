import { assert, expect } from 'chai';
import { double } from '../index';

describe('Test', () => {
  it('Calculate example', async () => {
    const result = double(2); // 2 * 2 = 4
    assert.equal(4, result);
  });
});