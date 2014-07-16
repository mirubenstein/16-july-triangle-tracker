describe('triangleType', function() {
  it('returns equilateral if triangle is equilateral', function() {
    triangleType(6,6,6).should.equal("equilateral");
  });
  it('returns isosceles if a triangle has 2 and only 2 sides of equal length', function() {
    triangleType(6,4,4).should.equal("isosceles");
  });
  it('return scalene if a triangleType has 3 unequal sides lenths', function() {
    triangleType(6,5,4).should.equal('scalene');
  });
});

