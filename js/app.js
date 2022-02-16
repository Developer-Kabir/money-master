document.getElementById("calculate-btn").addEventListener("click", function(){
    const incomeInput = document.getElementById("Income-input");
    const income = parseInt(incomeInput.value) ;
    const foodInput = document.getElementById("food-input");
    const foodCost = parseInt(foodInput.value) ;
    const rentInput = document.getElementById("rent-input");
    const rentCost = parseInt(rentInput.value) ;
    const clothesInput = document.getElementById("clothes-input");
    const clothesCost = parseInt(clothesInput.value);
    let totalCost = foodCost + rentCost + clothesCost ;

    

    let totalExpense =  document.getElementById("total-expense");
    totalExpense.innerText = totalCost;

     balance = income - totalCost ;
    const balenceText = document.getElementById("balance");
    balenceText.innerText = balance;
       
})

document.getElementById("saving-btn").addEventListener("click", function(){
    const savingInput = document.getElementById("saving-input");
    const savingRatio = parseInt(savingInput.value);
    const incomeInput = document.getElementById("Income-input");
    const income = parseInt(incomeInput.value) ;
    const savingAmount = (income * savingRatio) / 100 ;
    const savingAmountText = document.getElementById("saving-amount");
    savingAmountText.innerText = savingAmount ;

    const remainingBalence = balance - savingAmount ;
    const remainingBalenceText = document.getElementById("remaining-balance");
    remainingBalenceText.innerText = remainingBalence;
    
})