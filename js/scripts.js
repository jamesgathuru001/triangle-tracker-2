function triangle() {
  var length1 = document.getElementById('length1').value;
  var length2 = document.getElementById('length2').value;
  var length3 = document.getElementById('length3').value;

  var side1 = [parseFloat(length1)];
  var side2 = [parseFloat(length2)];
  var side3 = [parseFloat(length3)];

  var output = document.getElementById('output');

  var ab = side1.concat(side2);

  var abc = ab.concat(side3);

  var sorted = abc.sort(function(d, e) {
    return d - e;
  });

  var a = sorted[0];
  var b = sorted[1];
  var c = sorted[2];

  var lengthab = a + b;


  if (lengthab < c) {
    output.textContent = "ERROR! NOT A TRIANGLE";
  } else if (a === b && b === c && a > 0 && b > 0 && c > 0) {
    output.textContent = 'EQUILATERAL TRIANGLE';
  } else if (a === b && b !== c || a !== b && b === c && a > 0 && b > 0 && c > 0) {
    output.textContent = ('ISOCELES TRIANGLE');
  } else if (a !== b && b !== c && (Number.isInteger(a) === true || Number.isInteger(b) === true || Number.isInteger(c) === true) && a > 0 && b > 0 && c > 0) {
    output.textContent = 'SCALENE TRIANGLE';
  } else {
    output.textContent = "INVALID MEASUREMENTS!!";
  };
}
function reset() {
    document.getElementById('form').reset();
  }
