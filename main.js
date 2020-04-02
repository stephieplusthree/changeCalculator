// Write your JavaScript here
$("#calculate-change").click(function () {
    var change = (($("#amount-received").val() - $("#amount-due").val())).toFixed(2);
    $("#change-due").html("$" + change);

    var dollars = Math.floor((change / 1)).toFixed(0);
    $("#dollars-output").html(dollars);
    change -= dollars;
    
    var quarters = Math.floor((change / 0.25)).toFixed(0);
    $("#quarters-output").html(quarters);
    change -= quarters * .25;

    var dimes = Math.floor((change / 0.10)).toFixed(0);
    $("#dimes-output").html(dimes);
    change -= dimes * .10;

    var nickels = Math.floor((change / 0.05)).toFixed(0);
    $("#nickels-output").html(nickels);
    change -= nickels * .05;

    var pennies = Math.round((change / 0.01)).toFixed(0);
    $("#pennies-output").html(pennies);
    
    if (pennies == 5) {
        pennies = 0;
        nickels ++;
        $("#nickels-output").html(nickels);
        $("#pennies-output").html(pennies);
    }

    if (nickels == 2) {
        nickels = 0;
        dimes ++;
        $("#nickels-output").html(nickels);
        $("#dimes-output").html(dimes);
    }
});
//