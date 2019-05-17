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

observerList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;
  while (i > this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
};
