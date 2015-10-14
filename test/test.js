var expect = chai.expect;

var test = [4,2,1,5,9,10,7,6,3];
var test2 = [1,5,3,2,10,8,6,7,4];

describe('Get missing integer', function() {
  it('Should find the missing integer', function() {
    expect(missing(test)).to.equal(8);
  });
  it('Should find the missing integer', function() {
    expect(missing(test2)).to.equal(9);
  });
});
