const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('set github account name', () => {
    const git = 'GitHub';
    const engineer = new Engineer('Joe', 1, 'abc@123.com', git);

    expect(engineer.github).toBe(git);
});

test('retrieve role of "Engineer"', () => {
    const role = 'Engineer';
    const enginner = new Engineer('Joe', 1, 'abc@123.com', 'GitHub');

    expect(engineer.getRole()).toBe(role);
});

test('retrieve github account name', () => {
    const git = 'GitHub';
    const engineer = new Engineer('Joe', 1, 'abc@123.com', git);

    expect(engineer.getGitHub()).toBe(git);
});