const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates new employee onject', () => {
    const employee = new Employee();
    
    expect(typeof(employee)).toBe('object');
});

test('set employee name', () => {
    const employee = new Employee('Joe');
    
    expect(employee.name).toBe('Joe');
});

test('set employee id value', () => {
    const employee = new Employee('Joe', 1);

    expect(employee.id).toBe(1);
});

test('set employee email address', () => {
    const testMail = 'abc@123.com';
    const employee = new Employee('Joe', 1, testMail);

    expect(employee.email).toBe(testMail);
});

test('retrieve employee name', () => {
    const employee = new Employee('Joe');

    expect(employee.getName()).toBe('Joe');
});

test('retrieve employee id number', () => {
    const employee = new Employee('Joe', 1);

    expect(employee.getId()).toBe(1);
});

test('retrieve employee email address', () => {
    const testMail = 'abc@123.com';
    const employee = new Employee('Joe', 1, testMail);

    expect(employee.getEmail()).toBe(testMail);
});

test('return employee role', () => {
    const role = 'Employee';
    const employee = new Employee('Joe', 1, 'abc@123.com');

    expect(employee.getRole()).toBe(role);
});