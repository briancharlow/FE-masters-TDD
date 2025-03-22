import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe('subtract', () => {
    it("should subtract two numbers", () => {
        expect(subtract(2, 1)).toBe(1);
    });
});

describe('multiply', () => {
    it("should multiply two numbers", ()=>{
        expect(multiply(2, 3)).toBe(6);
    })
});

describe('divide', () => {
    it("should divide two numbers", ()=>{
        expect(divide(6, 3)).toBe(2);
    })
});
