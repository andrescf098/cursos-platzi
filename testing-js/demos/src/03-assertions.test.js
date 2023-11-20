// matchers
test('test obj ', () => {
  const data = { name: 'andres' };
  data.lastname = 'cifuentes';
  expect(data).toEqual({ name: 'andres', lastname: 'cifuentes' });
});

test('null ', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).not.toBeUndefined();
});

test('boolean ', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});
test('string', () => {
  expect('Christoph').toMatch(/stop/);
});
test('list / array', () => {
  const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'beer'];
  expect(shoppingList).toContain('beer');
});
