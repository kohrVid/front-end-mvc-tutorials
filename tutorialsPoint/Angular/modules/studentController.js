mainApp.controller("studentController", function ($scope) {
  $scope.student = {
    firstName: "Jessica",
    lastName: "Ete",
    fees: 500,

    subjects: [
      { name: "Physics", marks: 70 },
      { name: "Chemistry", marks: 80 },
      { name: "Maths", marks: 65 },
      { name: "English", marks: 75 },
      { name: "French", marks: 67 }

    ],

    fullName: function () {
      var studentObject;
      studentObject = $scope.student;
      return studentObject.firstName + " " + studentObject.lastName;
    }
  };
});
