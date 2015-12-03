// Grading App
function giveGrade() {
  var grade = document.getElementById("grade").value;

  console.log("we're here!");
  alert("hey!");

//Input your code below:
if (grade<=89 && grade >=80) {
  alert("B");
} 
if (grade<100 && grade>=90) {
  alert("A");
}
if (grade<79 && grade>=70) {
  alert("C");
} else if (grade>65 && grade<69) {
  alert("D");
} else if (grade<65) {
  alert("F")
}

  }