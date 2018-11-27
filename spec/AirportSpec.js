describe('Airport', function () {

  beforeEach(function() {
    airport = new Airport();
    plane1 = new Plane("Boeing");
    plane2 = new Plane("Airbus");
  });

  describe('land', function() {

    it('makes a plane landing', function() {
      airport.land(plane1)
      expect(airport.hangar).toContain(plane1)
    });

  });

  describe('takeoff', function() {

    it('makes a plane take-off', function() {
      airport.land(plane1)
      airport.land(plane2)
      airport.takeoff(plane1)
      expect(airport.hangar).not.toContain(plane1)
    });

  });

});


// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
