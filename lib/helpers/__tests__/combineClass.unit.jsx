import combineClass from '../combineClass';

describe('combineClass函数', () => {
  it('接受1个className', () => {
    const result = combineClass('a');
    expect(result).toEqual('a');
  });
  it('接受2个className', () => {
    const result = combineClass('a b');
    expect(result).toEqual('a b');
  });
  it('接受unfined的className', () => {
    const result = combineClass(undefined);
    expect(result).toEqual('');
  });
  it('接受中文的className', () => {
    const result = combineClass('你好');
    expect(result).toEqual('你好');
  });
  it('不接受className', () => {
    const result = combineClass();
    expect(result).toEqual('');
  });
  it('接受false，undefined, null的className', () => {
    const result = combineClass(false, undefined, null);
    expect(result).toEqual('');
  })
})
