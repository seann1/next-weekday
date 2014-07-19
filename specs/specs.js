describe("weekday", function() {
  it ("should return the date 7 days from today if given the current day", function () {
    weekday("Monday").should.eql(["monday", 7, 21, 2014]);
  });
  it ("returns date of the next occurance of the day specified in the input", function () {
  	weekday("Monday").should.eql(["monday", 7, 21, 2014]);
  });
  it ("returns the date of the next occurance of the day specified as an array. First element is a string of the day, second element is the month, third element is the day,fourth element is the year", function () {
  		weekday("tuesday").should.eql(["tuesday", 7, 22, 2014]);
  	});
});


