//Prompts to 
var loanType = prompt("Which loan calculator (home/car) would you like to use or would you like to quit?")

//Car Loan Function
function carLoan(num1, num2, num3) {
  return (num1*(num3/12))/(1-Math.pow((1+(num3/12)),-num2))
}

//Switches for loan Type
switch(loanType) {
  case "car":
    var carPrincipal = prompt("Enter the total amount of car loan needed:")
    var carTime = prompt("Enter the total amount of time in months needed for the loan:")
    var carInterestInput = prompt("Enter the interest rate of the car loan:")
    var carInterest = carInterestInput/100
    console.log(carLoan(carPrincipal, carTime, carInterest))
    break;
}