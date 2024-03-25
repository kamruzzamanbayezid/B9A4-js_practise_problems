
// Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale) {

      // validation
      if (typeof ticketSale !== 'number' || ticketSale <= 0) {
            return "Input should be a valid and positive number!!"
      }

      else {
            const perTicketPrice = 120;
            const perDayDaroyanCost = 500;
            const totalStaff = 8;
            const perDayPerStaffCost = 50;
            const totalStaffCost = totalStaff * perDayPerStaffCost;

            const perDayTotalCost = perDayDaroyanCost + totalStaffCost;

            const totalTicketPrice = perTicketPrice * ticketSale;

            const afterDayCostRemainingBalance = totalTicketPrice - perDayTotalCost;
            return afterDayCostRemainingBalance;
      }

}

// console.log('Remaining Balance:', calculateMoney(1055));

// Problem-02: Good Name , Bad Name
function checkName(name) {

      // validation
      if (typeof name !== 'string') {
            return 'Invalid Input'
      }

      else {
            const isInclude = 'ayieouwAYIEOUW';

            const splitWord = name.split('');
            const result = isInclude.includes(splitWord[splitWord.length - 1]);

            if (result) {
                  return 'Good Name';
            }
            else {
                  return 'Bad Name';
            }
      }
}

// console.log('It is a:', checkName(["Rashed"]));


// Problem 03 : Virus in my Array
function deleteInvalids(array) {

      // validation
      if (!Array.isArray(array)) {
            return "Please provide a valid array!"
      }
      else {
            const arrayOfNumbers = [];

            for (let element of array) {

                  if (typeof element === 'number' && !isNaN(element)) {
                        arrayOfNumbers.push(element);
                  }
            }
            return arrayOfNumbers;
      }
}

// console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));


// Problem 04 : Make A Great Password
function password(obj) {

      // validation
      if (typeof obj !== 'object') {
            return 'Input must be an object!'
      }
      else if (!obj.siteName || !obj.birthYear || !obj.name) {
            return 'Object must have siteName, birthYear, name property!'
      }
      else if (obj.birthYear.toString().length < 4) {
            return 'Birth year should have 4 character!'
      }

      else {
            const password = `${obj.siteName[0].toUpperCase()}${obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`;
            return password;
      }
}
// console.log(password({ name: "toky",  siteName: "Facebook" }));


// Problem 05 : Monthly Savings of a Freelancer
function monthlySavings(arr, livingCost) {

      // validation
      if (!Array.isArray(arr)) {
            return 'Input must be an array!'
      }
      else if (typeof livingCost !== 'number') {
            return 'Second parameter should be a number!'
      }
      else {

            let tax = 0;
            let total_income = 0;

            for (let payment of arr) {

                  // validation
                  if (typeof payment !== 'number') {
                        return 'Arrays element must be number!'
                  }
                  else {
                        if (payment >= 3000) {
                              tax = ((20 * payment) / 100);
                        }
                        total_income += payment;
                  }
            }
            const income_after_tax = total_income - tax;
            const savings = income_after_tax - livingCost;

            if (savings < 0) {
                  return 'Earn more!'
            }
            else {
                  return savings;
            }

      }
}

console.log('Savings:', monthlySavings(100, [ 900 , 2700 , 3400]));