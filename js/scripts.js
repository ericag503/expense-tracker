var Purchase = {
  totalCost: function() {
    return this.quantity * this.amount;
  }
};

$(document).ready(function() {

  var current;
  var purchaseTotals = [];

  $("form#categories").submit(function(event) {
    event.preventDefault();

    var newCategory = { name: "", purchases: []};
    var inputtedCategory = $("input#new-category").val();
    newCategory.name = inputtedCategory;


    $("#categories").append('<p><span class="clickable-category">' + inputtedCategory + '</span></p>');

    $(".clickable-category").last().click(function() {
      $(".expense-hide").show();
      $("#purchase-category").text(" " + inputtedCategory + ":");
      current = newCategory;
      $(".purchases tbody").empty()
      $(".grand-total tbody").text("");
      $(".grand-total tbody").append('<tr>' + '<td>' + "Grand Total" + '</td>'+'<td></td>'+'<td></td>' + '<td>' + total + '</td>')

      current.purchases.forEach(function(purchase) {

        $(".purchases tbody").append('<tr>' + '<td>' + purchase[0] + '</td>' +
                                              '<td>' + purchase[1] + '</td>' +
                                              '<td>' + purchase[2] + '</td>' +
                                              '<td>' + purchase[3] + '</td>' +
                                    '</tr>')


      })



    })

    this.reset();
  })

  $("form#purchase").submit(function(event) {
    event.preventDefault();

    $(".hide").show();

    var newPurchase = Object.create(Purchase)
    newPurchase.description = $("input#description").val();
    newPurchase.amount = parseInt($("input#amount").val());
    newPurchase.quantity = parseInt($("input#quantity").val());
    current.purchases.push([newPurchase.description, newPurchase.amount, newPurchase.quantity, newPurchase.totalCost()]);
    purchaseTotals.push(newPurchase.totalCost());
    console.log(purchaseTotals);

    $(".purchases tbody").append('<tr>' + '<td>' + newPurchase.description + '</td>' +
                                                             '<td>' + newPurchase.amount + '</td>' +
                                                             '<td>' + newPurchase.quantity + '</td>' +
                                                             '<td>' + newPurchase.totalCost() + '</td>' +
                                 '</tr>');

      var total = 0;
      purchaseTotals.forEach(function(grandTotal) {
        total += grandTotal;
      });
      console.log(total);
    $(".grand-total tbody").text("");
    $(".grand-total tbody").append('<tr>' + '<td>' + "Grand Total" + '</td>'+'<td></td>'+'<td></td>' + '<td>' + total + '</td>')

    this.reset();
  })

})
