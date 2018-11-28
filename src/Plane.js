'use strict';

function Plane (name) {
  this._name = name
};

Plane.prototype.land = function (airport) {
  airport.clearforLanding(this);
  this._location = airport;
};

Plane.prototype.takeoff = function () {
  this._location.clearforTakeOff(this);
};
