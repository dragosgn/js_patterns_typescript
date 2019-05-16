// Module pattern is based in part of object literals

// It should be noted that there isn't really an explicitly true sense of "privacy" inside JavaScript because unlike some traditional languages,
// it doesn't have access modifiers.

// ======= Object with literals =======
var myObjectLiteral = {
  variableKey: variableValue,
  functionKey: function() {
    // ...
  }
};

var myModule = {
  myProperty: "someValue",

  // obj literals can contain properties or methods
  myConfig: {
    useCaching: true,
    language: "en"
  },

  saySomething: function() {
    console.log("Where in the world is Paul Irish today?");
  },

  reportMyConfig: function() {
    console.log(
      "Caching is: " + this.myConfig.useCaching ? "enabled" : "disabled"
    );
  },

  // overrite curent config
  updateMyConfig: function(newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};

myModule.saySomething();

myModule.reportMyConfig();

myModule.updateMyConfig({
  language: "fr",
  useCaching: false
});

myModule.reportMyConfig();

// used to encapsulating and organizing code

// ======= The module pattern =======

// to further emulate the concept of clases, public and private methods shielding parts from the global scope
// javascript dosen't have acces modifiers

var testModule = (function() {
  var counter = 0;

  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
    }
  };
})();

// Usage:

// Increment our counter
testModule.incrementCounter();

// Check value and reset
testModule.resetCounter();

// this shield the counter variable from the global scope

var myNameSpace = (function() {
  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  myPrivateMethod = function(foo) {
    console.log(foo);
  };

  return {
    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function(bar) {
      // increment private counter
      myPrivateVar++;

      // call our private method using bar
      myPrivateMethod(bar);
    }
  };
})();

var basketModule = (function() {
  // privates
  var basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    // ...
  }

  // Return an object exposed to public
  return {
    // Add item to our basket
    addItem: function(values) {
      basket.push(values);
    },
    // Get the count of items in the basket
    getItemCount: function() {
      return basket.length;
    },
    doSomething: doSomethingPrivate,
    getTotal: function() {
      var q = this.getItemCount(),
        p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    }
  };
})();

basketModule.addItem({
  item: bread,
  price: 0.5
});

basketModule.addItem({
  item: butter,
  price: 0.3
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotal());
console.log(basketModule.basket);

console.log(basket);

// Module pattern variations

// Import mixings
// Global module

// this allows us to pull global modules and use them as we please aislated from global scope
var myModule = (function(jQ, _) {
  function privateMethod1() {
    jQ(".container").html("test");
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod: function() {
      privateMethod1();
    }
  };
  // Pull jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();

// exports

var myModule = (function() {
  // Module object
  var module = {},
    privateVariable = "Hello world";

  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod = function() {
    console.log(privateVariable);
  };

  return module;
})();

// toolkit and framework specific module pattern implementations

// Dojo pattern
// The Revealing Module Pattern

// The Singleton Pattern

var mySingleton = (function() {
  var instance;

  function init() {
    // Sigleton
    // Private methods and variables
    function privateMethod() {
      console.log("I am private");
    }

    var privateVariables = "I ma also private";

    var privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function() {
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }
  return {
    // Get the Singleton istance if one exists
    // or create on if it dosen't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

var myBadSingleton = (function() {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    var privateRandomNumber = Math.random();

    return {
      // Always create a new Singleton instance
      getInstance: function() {
        instance = init();
        return instance;
      }
    };
  }
})();

// Usage:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

var badSingleA = myBadSingleton.getInstance();
var badSingleB = myBadSingleton.getInstance();
console.log(badSingleA.getRandomNumber() !== badSingleB.getRandomNumber()); // true
