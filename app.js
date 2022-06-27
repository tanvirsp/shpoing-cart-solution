
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber("case", 59, true);
})


document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber("case", 59, false); 
})


document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber("phone", 1219, true);
})


document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber("phone", 1219, false); 
})






function updateCaseNumber(product, price, isIncrease){
    const productInput=  document.getElementById(product+ '-number');
    let productNumber = productInput.value;

    if(isIncrease){
        productNumber = parseInt(productNumber) + 1
    } else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1
    }

    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    subTotal()
};


function subTotal(){
    const phoneTotal = document.getElementById('phone-total').innerText;
    const caseTotal = document.getElementById('case-total').innerText;
    const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
    const tax = Math.ceil(subTotal * .1);
    const totalAmount = subTotal +  tax ;

     document.getElementById('sub-total').innerText = subTotal; 
     document.getElementById('tax-total').innerText = tax; 
     document.getElementById('total-amount').innerText = totalAmount; 
};


