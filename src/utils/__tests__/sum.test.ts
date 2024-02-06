function sum(x: number,y: number) {
  return x + y;
}

var assert = require('assert');
describe("Sum",function() {
    it("should return the correct value when provided with two numbers", function(){
        var result = sum(3,5);
        assert.equal(8,result,"The values are not equal.");
    });
});

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
}
);


