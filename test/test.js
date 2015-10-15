var expect = chai.expect;

var test = [4,2,1,5,9,10,7,6,3];
var test2 = [1,5,3,2,10,8,6,7,4];
var test3 = [1,9,3,2,10,8,6,7,4];

describe('Get missing integer from array 1-10', function() {

  it('Should find the number eight', function() {
    expect(missing(test)).to.equal(8);
  });

  it('Should find the number nine', function() {
    expect(missing(test2)).to.equal(9);
  });

  it('Should find the number five', function() {
    expect(missing(test3)).to.equal(5);
  });

});
