import validation from '../validation';

describe('validation: ', () => {
  it('Should return error: name required', () => {
    try {
      validation({});
    } catch (error) {
      expect(error.errors.name).toBe('name required');
    }
  });

  it('Should return error: phone required', () => {
    try {
      validation({
        name: 'asdasdas',
      });
    } catch (error) {
      expect(error.errors.phone).toBe('phone required');
    }
  });

  it('Should return error: invalid phone', () => {
    try {
      validation({
        name: 'asdasdas',
        phone: 'asdasd',
      });
    } catch (error) {
      expect(error.errors.phone).toBe('invalid phone');
    }
  });

  it('Should return error: email required', () => {
    try {
      validation({
        name: 'asdasdas',
        phone: '123456789',
      });
    } catch (error) {
      expect(error.errors.email).toBe('email required');
    }
  });

  it('Should return error: invalid email', () => {
    try {
      validation({
        name: 'asdasdas',
        phone: '123456789',
        email: 'asdasdasdas',
      });
    } catch (error) {
      expect(error.errors.email).toBe('invalid email');
    }
  });

  it('Should return true', () => {
    expect(validation({
      name: 'asdasdas',
      phone: '123456789',
      email: 'asd@mial.dsu',
    })).toBeTruthy();
  });
});
