// function for using multiple time 

// income string to number conversion 
function calculateIncome (){
    const incomeInput = document.getElementById("Income-input");
    const monthlyIncome = parseInt(incomeInput.value);
    return monthlyIncome;
}

// food cost string to number conversion 
function calculateFoodCost (){
    const foodInput = document.getElementById("food-input");
    const foodCostValue = parseInt(foodInput.value) ;
    return foodCostValue;
}

// rent cost string to number conversion 
function calculateRent(){
    const rentInput = document.getElementById("rent-input");
    const rentCostValue = parseInt(rentInput.value) ;
    return rentCostValue;
}

// iclothes cost string to number conversion 
function calculateClothesCost(){
    const clothesInput = document.getElementById("clothes-input");
    const clothesCostValue = parseInt(clothesInput.value);
    return clothesCostValue;
}

// saving ratio string to number conversion 
function calculateSavingratio(){
    const savingInput = document.getElementById("saving-input");
    const savingRatioValue = parseInt(savingInput.value);
    return savingRatioValue;
}

// total expense calculation
function totalExpenseCalculation (){
    const income = calculateIncome();
    const foodCost = calculateFoodCost();
    const rentCost = calculateRent();
    const clothesCost = calculateClothesCost();
    let totalMonthlyCost = foodCost + rentCost + clothesCost ;
    return totalMonthlyCost;
}



// balance calculation function 

function balanceCalculation(){
    const income = calculateIncome();
    const foodCost = calculateFoodCost();
    const rentCost = calculateRent();
    const clothesCost = calculateClothesCost();
    let totalCost = foodCost + rentCost + clothesCost ;
    const balance = income - totalCost ;


     if (income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0 ){
        window.alert("Please input positive value");
    }
    else if( isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)){
        window.alert("Sting value and empty value is not accepetable Please input minimum 0 or more");
    }
    else {
        if ( totalCost > income ){
            window.alert("You can not expense more than of your income. Please decrease your cost");
        }
        else {
            let totalExpense =  document.getElementById("total-expense");
            totalExpense.innerText = totalCost;
            const balenceText = document.getElementById("balance");
            balenceText.innerText = balance;
        }
    }
}


//  remaining balance calculation functionb 

function remainingBalenceCalculation(){
    const income = calculateIncome();
    let totalCost = totalExpenseCalculation() ;
    const balance = income - totalCost ;
    const savingRatio = calculateSavingratio();
    const savingAmount = (income * savingRatio) / 100 ;
     

     if ( savingRatio < 1){
        window.alert("Please Input Positive value or more than zero for saving. Negative value and zero is not accepted for saving ratio")
    }
    else if ( isNaN(savingRatio)){
        window.alert("Sting value is not accepetable Please input number value");
    }
    else{
        if ( savingAmount > balance){
            window.alert("You can not save more than of your balence")
        }
        else{
            const savingAmountText = document.getElementById("saving-amount");
            savingAmountText.innerText = savingAmount ;

            const remainingBalence = balance - savingAmount ;
            const remainingBalenceText = document.getElementById("remaining-balance");
            remainingBalenceText.innerText = remainingBalence;
        }
    }
}


//  handel even for click claculate button 
document.getElementById("calculate-btn").addEventListener("click", function(){
    balanceCalculation();
       
})

//  handel event for save button 
document.getElementById("saving-btn").addEventListener("click", function(){
    remainingBalenceCalculation();
})

