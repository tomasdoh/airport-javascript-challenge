describe('Airport', function () {

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('land', function() {

    it('makes a plane landing', function() {
      airport.land(plane)
      expect(airport.hangar).toContain(plane)
    });

  });


});
