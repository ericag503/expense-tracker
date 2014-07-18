describe("Purchase", function() {
  describe("totalCost", function() {
    it("it returns the total cost of the quantity and amount", function() {
      var pizza = Object.create(Purchase);
      pizza.quantity = 1;
      pizza.amount = 10;
      pizza.totalCost().should.equal(10);
    });
  });
});
