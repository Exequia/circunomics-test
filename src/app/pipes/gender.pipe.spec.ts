import { GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  const pipe = new GenderPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transforms "female" adding female icon', () => {
    expect(pipe.transform('female')).toBe(
      'female <i class="bi bi-gender-female"></i>'
    );
  });

  it('should transforms "male" adding male icon', () => {
    expect(pipe.transform('male')).toBe(
      'male <i class="bi bi-gender-male"></i>'
    );
  });
});
