'use strict';

function Airport() {
  this._hangar = [];
};

Airport.prototype.planes = function () { return this._hangar; };

Airport.prototype.clearforLanding = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.clearforTakeOff = function(plane) {
  var pos = this._hangar.indexOf(plane);
  this._hangar.splice(pos, 1);
};

Airport.prototype.isStormy = function() {
  return false;
};
