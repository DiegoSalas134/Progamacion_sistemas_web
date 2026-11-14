import { describe, it, expect } from 'vitest';
import { hashPassword, comparePassword } from '../../../src/utils/password.util.ts';

describe('generates hashes and compares passwords.',()=>{
  const password1 = 'ClaveUno123!';
  const password2 = 'ClaveDos456!';

  it('should generate non-empty hashes that are different from the original password.', async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);
    expect(typeof hash1).toBe('string');
    expect(hash1).not.toBe('');
    expect(hash1).not.toBe(password1);
    expect(typeof hash2).toBe('string');
    expect(hash2).not.toBe('')
    expect(hash2).not.toBe(password2);
  });

  it('should return true when the password matches its hash', async()=>{
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);
    const match1 = await comparePassword(password1, hash1);
    const match2 = await comparePassword(password2, hash2);
    expect(match1).toBe(true);
    expect(match2).toBe(true);
  });

  it('should return false when the password does not match the hash', async()=>{
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);
    const wrong1 = await comparePassword(password2, hash1);
    const wrong2 = await comparePassword(password1, hash2);

    expect(wrong1).toBe(false);
    expect(wrong2).toBe(false);
  });
});