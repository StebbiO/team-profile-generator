const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');

test('set school', () => {
    const school = 'UT Austin'
    const intern = new Intern('Joe', 1, 'abc@123.com', school);

    expect(intern.school).toBe(school);
});

test('retrieve role of "Intern"', () => {
    const role = 'Intern';
    const intern = new Intern('Joe', 1, 'abc@123.com', 'UT Austin');

    expect(intern.getRole()).toBe(role);
});

test('retrieve school', () => {
    const school = 'UT Austin';
    const intern = new Intern('Joe', 1, 'abc@123.com', school);

    expect(intern.getSchool()).toBe(school);
});