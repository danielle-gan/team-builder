const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test('get name from getName', () => {
    const testName = "Dani"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "1"
    const employee = new Employee("Grant", testId);
    expect(employee.getId()).toBe(testId);
});
test('get email from getEmail', () => {
    const testEmail = "danielle.gan@uconn.edu"
    const employee = new Employee("Dani", "1", testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
test('getRole function', () => {
    const testRole = "Employee"
    const employee = new Employee("Dani", "1", "danielle.gan@uconn.edu");
    expect(employee.getRole()).toBe(testRole);
});