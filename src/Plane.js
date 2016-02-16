function Plane(){

}

Plane.prototype.land = function(airport){
  this.isLanded = true;
  airport.land(this);
};

Plane.prototype.takeOff = function(){
  this.isLanded = false;
};
