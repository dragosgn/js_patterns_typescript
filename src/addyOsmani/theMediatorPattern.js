// the mediator pattern
// expose a unified interface through which different parts of a system may communicate
// mediator and event agregator patterns are different

// Simple mediator
var mediator = [];

var orgChart = {
  addNewEmployee: function() {
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();

    employeeDetail.on("complete", function(employee) {});
  }
};
