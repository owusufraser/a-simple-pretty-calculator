console.log("Hello Janos");

/* what we need
- title - using html element ✅
- small body of text inviting users to calculate something✅
- input field for users to enter numbers to be calculated✅
    this includes the two numbers being calculated
- a button that would return the results once pressed✅
- somewhere to display the results✅
- a dropdown selector for the operator✅
- styling to make it pretty like Janos using css
- [how the app works out problems] 

- check for and create a message for when nothing has been entered (input validation)


- check for & create message for when user only enters one number to be calculated

- check for & create message for when user enters letters instead of numbers

- check for & create message for when user tries to divide by zero
- create condition (code) for when + is selected
- create condition for when - is selected
- create condition for when x is seleted
- create condition for when divide is selected */

document.getElementById("calculateBtn").addEventListener("click", function() {
    
    const operator = document.getElementById("operator").value;
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    console.log(number1, operator, number2);
});