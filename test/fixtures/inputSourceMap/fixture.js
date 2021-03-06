var Person, assert;

assert = require('power-assert');

Person = (function() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  return Person;

})();

describe("various types", function() {
  beforeEach(function() {
    return this.types = [
      "string", 98.6, true, false, null, undefined, ["nested", "array"], {
        object: true
      }, NaN, Infinity, /^not/, new Person("alice", 3)
    ];
  });
  return it("demo", function() {
    var bob, index;
    index = this.types.length - 1;
    bob = new Person("bob", 5);
    return assert(this.types[index].name === bob.name);
  });
});


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3Rha3V0by93b3JrL2dpdC1zYW5kYm94L2dpdGh1Yi9QT1dFUkFTU0VSVC9lc3Bvd2VyaWZ5LWV4YW1wbGUvdGVzdC9ub2RlL2NvZmZlZV9zY3JpcHRfdGVzdC5jb2ZmZWUiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIvYWJzb2x1dGUvcGF0aC90by9jb2ZmZWVfc2NyaXB0X3Rlc3QuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsY0FBQTs7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLGNBQVIsQ0FBVCxDQUFBOztBQUFBO0FBR2UsRUFBQSxnQkFBQyxJQUFELEVBQU8sR0FBUCxHQUFBO0FBQ1gsSUFBQSxJQUFDLENBQUEsSUFBRCxHQUFRLElBQVIsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLEdBQUQsR0FBTyxHQURQLENBRFc7RUFBQSxDQUFiOztnQkFBQTs7SUFIRixDQUFBOztBQUFBLFFBT0EsQ0FBUyxlQUFULEVBQTBCLFNBQUEsR0FBQTtBQUN4QixFQUFBLFVBQUEsQ0FBVyxTQUFBLEdBQUE7V0FDVCxJQUFDLENBQUEsS0FBRCxHQUFTO01BQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxJQUhPLEVBSVAsS0FKTyxFQUtQLElBTE8sRUFNUCxTQU5PLEVBT1AsQ0FDRSxRQURGLEVBRUUsT0FGRixDQVBPLEVBV1A7QUFBQSxRQUNFLE1BQUEsRUFBUSxJQURWO09BWE8sRUFjUCxHQWRPLEVBZVAsUUFmTyxFQWdCUCxNQWhCTyxFQWlCSCxJQUFBLE1BQUEsQ0FBTyxPQUFQLEVBQWdCLENBQWhCLENBakJHO01BREE7RUFBQSxDQUFYLENBQUEsQ0FBQTtTQXFCQSxFQUFBLENBQUcsTUFBSCxFQUFXLFNBQUEsR0FBQTtBQUNULFFBQUEsVUFBQTtBQUFBLElBQUEsS0FBQSxHQUFRLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxHQUFnQixDQUF4QixDQUFBO0FBQUEsSUFDQSxHQUFBLEdBQVUsSUFBQSxNQUFBLENBQU8sS0FBUCxFQUFjLENBQWQsQ0FEVixDQUFBO1dBRUEsTUFBQSxDQUFPLElBQUMsQ0FBQSxLQUFNLENBQUEsS0FBQSxDQUFNLENBQUMsSUFBZCxLQUFzQixHQUFHLENBQUMsSUFBakMsRUFIUztFQUFBLENBQVgsRUF0QndCO0FBQUEsQ0FBMUIsQ0FQQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYXNzZXJ0ID0gcmVxdWlyZSAncG93ZXItYXNzZXJ0J1xuXG5jbGFzcyBQZXJzb25cbiAgY29uc3RydWN0b3I6IChuYW1lLCBhZ2UpIC0+XG4gICAgQG5hbWUgPSBuYW1lXG4gICAgQGFnZSA9IGFnZVxuXG5kZXNjcmliZSBcInZhcmlvdXMgdHlwZXNcIiwgLT5cbiAgYmVmb3JlRWFjaCAtPlxuICAgIEB0eXBlcyA9IFtcbiAgICAgIFwic3RyaW5nXCJcbiAgICAgIDk4LjZcbiAgICAgIHRydWVcbiAgICAgIGZhbHNlXG4gICAgICBudWxsXG4gICAgICBgdW5kZWZpbmVkYFxuICAgICAgW1xuICAgICAgICBcIm5lc3RlZFwiXG4gICAgICAgIFwiYXJyYXlcIlxuICAgICAgXVxuICAgICAge1xuICAgICAgICBvYmplY3Q6IHRydWVcbiAgICAgIH1cbiAgICAgIE5hTlxuICAgICAgSW5maW5pdHlcbiAgICAgIC9ebm90L1xuICAgICAgbmV3IFBlcnNvbihcImFsaWNlXCIsIDMpXG4gICAgXVxuXG4gIGl0IFwiZGVtb1wiLCAtPlxuICAgIGluZGV4ID0gQHR5cGVzLmxlbmd0aCAtIDFcbiAgICBib2IgPSBuZXcgUGVyc29uKFwiYm9iXCIsIDUpXG4gICAgYXNzZXJ0IEB0eXBlc1tpbmRleF0ubmFtZSBpcyBib2IubmFtZVxuIl19
