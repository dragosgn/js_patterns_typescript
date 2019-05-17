// The Observer is a design pattern where an object (known as a subject)
// maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;
  while (i > this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
};

ObserverList.prototype.removeAt = function(index) {
  this.observerList.splice(index, 1);
};

// this is the Subject
function Subject() {
  this.observers = new ObserversList();
}

Subject.prototype.addObserver = function(observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context);
  }
};

function Observer() {
  this.update = function() {
    // ....
  };
}

// Extend an object with and extension
function extend(obj, extension) {
  for (var key in extension) {
    obj[key] = extension[key];
  }
}

// Reference to our DOM elements
var controlCheckbox = document.getElementById("mainCheckbox"),
  addBtn = document.getElementById("addNewObserver"),
  container = document.getElementById("observersContainer");

// Concrete Subject

// Extend the controling checkbox with the Subject class
extend(controlCheckbox, new Subject());

// Clicking thecheckbox will trigger notifications to its observers
controlCheckbox.onclick = function() {
  controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;

// Concrete Observer

function addNewObserver() {
  // Create a new checkbox to be added
  var check = document.createElement("input");
  check.type = "checkbox";

  // Extend the checkbox with the Observer class
  extend(check, new Observer());

  // Overrride with custom update behaviour
  check.update = function(value) {
    this.checked = value;
  };
}
