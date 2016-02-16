describe ("Airport", function(){

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    spyOn(plane, 'land');
  });

  it ("starts off with an empy array of planes", function(){
    expect(airport.planes).toEqual([]);
  });

  describe ("Land", function(){

    it ("responds to land", function(){
      expect(airport.land).toBeDefined();
    });

    it ("adds the plane to the airport", function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

  });

  describe ("Takeoff", function(){

    it ("responds to takeoff", function(){
      expect(airport.takeOff).toBeDefined();
    });

    it ("removes a plane from the planes array", function(){
      airport.planes = [plane];
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });

  });

});
