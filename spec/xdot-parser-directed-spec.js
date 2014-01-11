define(['parser/xdot', 'spec/xdots/directed', 'spec/asts/directed/clust4'], function (xdot, array, clust4) {

  describe('XDOT parser', function () {
    using("provided gallery graphs", array, function (graph) {
      describe("parser", function () {
        it("should not throw an exception", function () {
          expect(function () {
            xdot.parse(graph)
          }).not.toThrow();
          try {
            xdot.parse(graph);
          } catch (e) {
            expect(e.line).toEqual(0);
            expect(e.column).toEqual(0);
          }
        });
      })
    });
  });

  describe('XDOT parser', function () {
    it("should return backward compatible AST", function () {
      var actual = xdot.parse(array[10][0]);
      expect(actual).toEqual(clust4);
    });
  });
});