import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
    it("should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("should add two negative numbers", () => {
        expect(add(-1, -2)).toBe(-3);
    });
    it("should parse strings into integers", () => {
        expect(add("1", "2")).toBe(3);
    });
    it("should get angry when given a string that cannot be changed to a number", () => {
        expect(() => add("2", "two")).toThrow();
    })
    it("should throw an error when a boolean value is passed", () => {
        expect(() => add(2, true)).toThrow("Input cannot be boolean");
    })
    it("should accept an input of arrays and concatenate them", () => {
        expect(add([1, 2], [3, 4])).toBe("1,2,3,4");
    })
});

describe('subtract', () => {
    it("should subtract two numbers", () => {
        expect(subtract(2, 1)).toBe(1);
    });
    it("should subtract two negative numbers", () => {
        expect(subtract(-1, -2)).toBe(1);
    });
    it("should accept an array input", () =>{
        expect(subtract([1, 2], [3, 4])).toBe(0);
        expect(subtract([1, 2], 3)).toBe(-4);
    })
    
});

describe('multiply', () => {
    it("should multiply two numbers", ()=>{
        expect(multiply(2, 3)).toBe(6);
    })
    it("should multiply two negative numbers", ()=>{
        expect(multiply(-2, -3)).toBe(6);
    })
    it("should convert strings to numbers", ()=>{
        expect(multiply("2", "3")).toBe(6);
    })
});

describe('divide', () => {
    it("should divide two numbers", ()=>{
        expect(divide(6, 3)).toBe(2);
    })
    it("should divide given numbers by 0 to give undefined", () => {
        expect(divide(8, 0)).toBe(Infinity);
    })
    it("should divide two negative numbers", ()=>{
        expect(divide(-6, -3)).toBe(2);
    }),
    it("should convert strings to numbers", ()=>{
        expect(divide("6", "3")).toBe(2);
    })
    it("should throw an error if input cannot be converted to a number", () => {
        expect(() => divide("6", "three")).toThrow("Cannot convert input to number");
    })
});
