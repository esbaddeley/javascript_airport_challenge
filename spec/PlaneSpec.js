describe ("Plane", function(){

  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['land']);
  });

  describe ("land", function(){

    it ("responds to the land function", function(){
      expect(plane.land).toBeDefined();
    });

    it ("sets the isLanded property to true", function(){
      plane.land(airport);
      expect(plane.isLanded).toEqual(true);
    });

    it ("calls the land method on airport", function(){
      plane.land(airport);
      expect(airport.land).toHaveBeenCalledWith(plane);
    });

  });

  describe ('takeoff', function(){

    it ("responds to the takeoff function", function(){
      expect(plane.takeOff).toBeDefined();
    });

    it ("sets the isLanded property to false", function(){
      plane.takeOff();
      expect(plane.isLanded).toEqual(false);
    });

  });

});
