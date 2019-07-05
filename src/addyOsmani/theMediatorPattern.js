// the mediator pattern
// expose a unified interface through which different parts of a system may communicate
// mediator and event agregator patterns are different

// Simple mediator
var mediator = [];

var orgChart = {
  addNewEmployee: function() {
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();

    // when the employee detail is complete, the meadiator (the orgChart object)
    // decides what happens next
    employeeDetail.on("complete", function(employee) {
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee) {
        employee.save();
      });
    });
  }
};

// A mediator is an object that handles the workflow between many other objects.
// It handles the workflow between many other objects, aggreagting the responsibility of that workflow into a single object.
// It reduces the comunication channels needed between objects or components in a system from many to many to many to one. Adding publishers and subscribers is relatively easy due to the level of decoupling.
