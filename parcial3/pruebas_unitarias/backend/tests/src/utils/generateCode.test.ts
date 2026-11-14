import { describe, it, expect } from 'vitest';
import {generateSixDigitCode} from '../../../src/utils/generateCode.util.ts';

describe('generate code test', ()=>{
    it('should generate a six digit code', ()=>{
        const code = generateSixDigitCode();
        expect(String(code)).matches(/\d{6}/); //Modify: error, expected to be string
    }),
    it('should generate unique codes', ()=>{
        const code1 = generateSixDigitCode();
        const code2 = generateSixDigitCode();
        expect(code1!==code2).toBe(true);
    })
    it('should generate codes between 100000 and 999999', ()=>{
        const code = Number(generateSixDigitCode());//Modify: error, expected to be Number
        expect(code).toBeGreaterThanOrEqual(100000);
        expect(code).toBeLessThanOrEqual(999999);
    })
})