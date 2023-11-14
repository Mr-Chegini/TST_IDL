const notFoundHandler = {
  get: function (target, prop) {
    if (!target.hasOwnProperty(prop)) {
      return "404";
    }
  },
};

const proxiedObject = new Proxy({}, notFoundHandler);

// Example usage
console.log(proxiedObject.someProperty);
console.log(proxiedObject.anotherProperty);
