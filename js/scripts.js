var triangleType = function(a,b,c) {
  if (a === b && b === c) {
    return "equilateral";
  } else if(a === b || b === c || a === c) {
    return "isosceles";
  } else {
   return "scalene";
  }
};

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var side1input = parseFloat($("input#side1").val());
    var side2input = parseFloat($("input#side2").val());
    var side3input = parseFloat($("input#side3").val());
    var sidesToSort = [side1input, side2input, side3input];
    var sortedSides = sidesToSort.sort(function(a,b){
      return a - b;
    });
    console.log(sidesToSort);
    console.log(sortedSides);
    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      alert("Sides are too short. Please enter longer sides that create a triangle.");
    } else {
      var triangle = {side1: side1input, side2: side2input, side3: side3input, triangleType: function() {
          if (this.side1 === this.side2 && this.side2 === this.side3) {
            return "equilateral";
          } else if(this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) {
            return "isosceles";
          }
        }
      };
      console.log(triangle);
      if(triangle.triangleType() === "equilateral") {
        $('ul#equilateral').append('<li>' + triangle.side1 + ", " +
                                            triangle.side2 + ", " +
                                            triangle.side3 + "</li>");
      } else if(triangle.triangleType() === "isosceles") {
        $('ul#isosceles').append('<li>' + triangle.side1 + ", " +
                                    triangle.side2 + ", " +
                                    triangle.side3 + "</li>");
      } else {
        $('ul#scalene').append('<li>' + triangle.side1 + ", " +
                                    triangle.side2 + ", " +
                                    triangle.side3 + "</li>");
      }
    }
    $(':input').val('');
  });
});
