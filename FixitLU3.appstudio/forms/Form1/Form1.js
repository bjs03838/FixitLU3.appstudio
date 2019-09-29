//Car Loan Function
function carLoan(num1, num2, num3) {
  return (num1*(num3/12))/(1-Math.pow((1+(num3/12)),-num2))
}

//Home Loan Function
function homeLoan(num1, num2, num3) {
  return (num1*(num3/12))/(1-Math.pow((1+(num3/12)),-num2))
}

do {
//Prompts to 
var loanType = prompt("Which loan calculator (home/car) would you like to use or would you like to quit?")

//Switch for loan Type
switch (loanType) {
  case "car":
    var carPrincipal = prompt("Enter the total amount of car loan needed:");
    var carTime = prompt("Enter the total amount of time in months needed for the car loan:");
    var carInterestInput = prompt("Enter the interest rate of the car loan:");
    var carInterest = carInterestInput/100;
    var carOutput = (carLoan(carPrincipal, carTime, carInterest));
    alert(`A car loan for $${carPrincipal} over ${carTime} months at ${carInterestInput}% interest would have a monthly payment of $${carOutput.toFixed(2)}`);
    break;
  case "home":
    var homePrincipal = prompt("Enter the total amount of home loan needed:");
    var homeTimeInput = prompt("Enter the total amount of time in years needed for the home loan:");
    var homeTime = homeTimeInput*12;
    var homeInterestInput = prompt("Enter the interest rate of the home loan:");
    var homeInterest = homeInterestInput/100;
    var homeOutput = (homeLoan(homePrincipal, homeTime, homeInterest));
    alert(`A home loan for $${homePrincipal} over ${homeTimeInput} years at ${homeInterestInput}% interest would have a monthly payment of $${homeOutput.toFixed(2)}`);
    break;
}
}
while (loanType !== "quit");
