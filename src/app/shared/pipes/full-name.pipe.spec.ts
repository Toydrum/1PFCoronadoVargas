import { FullNamePipe } from './full-name.pipe';

describe('UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
