'use strict';

describe('Plane', function () {

  var airport;
  var plane;

  beforeEach(function() {
    airport = jasmine.createSpyObj('airport', ['clearforLanding', 'clearforTakeOff']);
    plane = new Plane();
  });

  it('can land at an airport', function(){
    plane.land(airport);
    expect(airport.clearforLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.clearforTakeOff).toHaveBeenCalledWith(plane);
  });

});
