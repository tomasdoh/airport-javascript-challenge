'use strict';

describe('Airport', function () {

  var plane;
  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearforLanding(plane);
    expect(airport.planes()).toEqual([plane])
  });

  it('can clear planes for takeoff', function() {
    airport.clearforLanding(plane)
    airport.clearforTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('checks if the weather is stormy', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

});


// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy
