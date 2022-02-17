// balance calculation function 

function balanceCalculation(){
    const incomeInput = document.getElementById("Income-input");
    const income = parseInt(incomeInput.value) ;
    const foodInput = document.getElementById("food-input");
    const foodCost = parseInt(foodInput.value) ;
    const rentInput = document.getElementById("rent-input");
    const rentCost = parseInt(rentInput.value) ;
    const clothesInput = document.getElementById("clothes-input");
    const clothesCost = parseInt(clothesInput.value);
    let totalCost = foodCost + rentCost + clothesCost ;
    const balance = income - totalCost ;

    if (income < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0 ){
        window.alert("Please input positive value");
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
    const savingInput = document.getElementById("saving-input");
    const savingRatio = parseInt(savingInput.value);
    const incomeInput = document.getElementById("Income-input");
    const income = parseInt(incomeInput.value) ;
    const foodInput = document.getElementById("food-input");
    const foodCost = parseInt(foodInput.value) ;
    const rentInput = document.getElementById("rent-input");
    const rentCost = parseInt(rentInput.value) ;
    const clothesInput = document.getElementById("clothes-input");
    const clothesCost = parseInt(clothesInput.value);
    let totalCost = foodCost + rentCost + clothesCost ;
    const balance = income - totalCost ;
    const savingAmount = (income * savingRatio) / 100 ;
     
    if ( savingRatio < 0){
        window.alert("Please Input Positive value for saving. Negative value is not accepted")
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

