(function() {
  var oldColaRootFn;

  oldColaRootFn = cola._rootFunc;

  cola._rootFunc = function() {
    var fn, name, targetDoms;
    if (arguments.length === 2 && typeof arguments[0] === "string" && typeof arguments[1] === "function") {
      name = arguments[0];
      fn = arguments[1];
      targetDoms = $(".example[name='" + name + "']");
      targetDoms.find(".prettyprint").attr("c-ignore", "");
      if (targetDoms.length) {
        oldColaRootFn(name, targetDoms[0], fn);
        return;
      } else {
        throw new cola.Exception("\".example[name='" + name + "']\" not exists.");
      }
    }
    return oldColaRootFn.apply(this, arguments);
  };

}).call(this);

//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sYS1pbnRlcmNlcHRvci5qcyIsInNvdXJjZXMiOlsiY29sYS1pbnRlcmNlcHRvci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLGFBQUEsR0FBZ0IsSUFBSSxDQUFDOztFQUNyQixJQUFJLENBQUMsU0FBTCxHQUFpQixTQUFBO0FBQ2hCLFFBQUE7SUFBQSxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXBCLElBQTBCLE9BQU8sU0FBVSxDQUFBLENBQUEsQ0FBakIsS0FBdUIsUUFBakQsSUFBOEQsT0FBTyxTQUFVLENBQUEsQ0FBQSxDQUFqQixLQUF1QixVQUF4RjtNQUNDLElBQUEsR0FBTyxTQUFVLENBQUEsQ0FBQTtNQUNqQixFQUFBLEdBQUssU0FBVSxDQUFBLENBQUE7TUFDZixVQUFBLEdBQWEsQ0FBQSxDQUFFLGlCQUFBLEdBQWtCLElBQWxCLEdBQXVCLElBQXpCO01BQ2IsVUFBVSxDQUFDLElBQVgsQ0FBZ0IsY0FBaEIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFxQyxVQUFyQyxFQUFpRCxFQUFqRDtNQUVBLElBQUcsVUFBVSxDQUFDLE1BQWQ7UUFDQyxhQUFBLENBQWMsSUFBZCxFQUFvQixVQUFXLENBQUEsQ0FBQSxDQUEvQixFQUFtQyxFQUFuQztBQUNBLGVBRkQ7T0FBQSxNQUFBO0FBSUMsY0FBVSxJQUFBLElBQUksQ0FBQyxTQUFMLENBQWUsbUJBQUEsR0FBb0IsSUFBcEIsR0FBeUIsa0JBQXhDLEVBSlg7T0FORDs7V0FZQSxhQUFhLENBQUMsS0FBZCxDQUFvQixJQUFwQixFQUF1QixTQUF2QjtFQWJnQjtBQURqQiJ9