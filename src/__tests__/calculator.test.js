import { describe, it, expect } from 'vitest';
import { calculate } from '../App';

describe('Calculator', () => {
    it('should add two numbers', () => {
        expect(calculate(1, 1, '+')).toBe(2);
    });

    it('should subtract two numbers', () => {
        expect(calculate(2, 1, '-')).toBe(1);
    });

    it('should multiply two numbers', () => {
        expect(calculate(2, 3, '*')).toBe(6);
    });

    it('should divide two numbers', () => {
        expect(calculate(6, 3, '/')).toBe(2);
    });

    it('should handle division by zero', () => {
        expect(calculate(6, 0, '/')).toBe(Infinity);
    });
});
