const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('set office number', () => {
    const office = 'A1'
    const manager = new Manager('Joe', 1, 'abc@123.com', office);

    expect(manager.officeNumber).toBe(office);
});

test('retrieve role of "manager"', () => {
    const role = 'Manager';
    const manager = new Manager('Joe', 1, 'abc@123.com', 'A1');

    expect(manager.getRole()).toBe(role);
});

test('retrieve office number value', () => {
    const office = 'A1';
    const manager = new Manager('Joe', 1, 'abc@123.com', office);

    expect(manager.getOfficeNumber()).toBe(office);
});