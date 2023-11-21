describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  });
  beforeEach(() => {
    console.log('beforeEach');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });
  describe('other group', () => {
    test('case 3', () => {
      console.log('case 3');
      expect(2 + 4).toBe(6);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 7).toBe(8);
    });
  });
  afterAll(() => {
    console.log('afterAll');
  });
});
