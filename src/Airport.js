function Airport() {
  this.hangar = [];
};

// Airport.prototype.capacity = function() {
//   this.capacity = 10;
// };

Airport.prototype.land = function(plane) {
  this.hangar.push(plane)
};
