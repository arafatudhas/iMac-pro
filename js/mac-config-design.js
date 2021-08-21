//update memory price funtion 
function updateMemoryPrice(isBaseMemory) {
    let extraMemoryPrice = document.getElementById('extra-memory-price').innerText;
    let totalMemoryPrice = document.getElementById('extra-memory-price');


    if (isBaseMemory == '8gb') {
        totalMemoryPrice.innerText = 0;


    } else if (isBaseMemory == '16gb') {
        totalMemoryPrice.innerText = 180;


    }
    return totalMemoryPrice;

}

//update storage price funtion 
function updateStoragePrice(isStorage) {
    let extraStoragePrice = document.getElementById('extra-storage-price').innerText;
    let totalStoragePrice = document.getElementById('extra-storage-price');

    if (isStorage == '256gb-storage') {
        totalStoragePrice.innerText = 0;

    } else if (isStorage == '512gb-storage') {
        totalStoragePrice.innerText = 100;
    } else if (isStorage == '1tb-storage') {
        totalStoragePrice.innerText = 180;
    }
    return totalStoragePrice;

}


//update delivery price funtion 
function updateDeliveryPrice(isDeliveryCharge) {
    let deliveryPrice = document.getElementById('extra-delivery-price').innerText;
    let totalDeliveryPrice = document.getElementById('extra-delivery-price');

    if (isDeliveryCharge == 'without-charge') {
        totalDeliveryPrice.innerText = 0;

    } else if (isDeliveryCharge == 'with-charge') {
        totalDeliveryPrice.innerText = 20;
    }

    return totalDeliveryPrice;

}


//calculate total charge
function calculate(memory, storage, deliverycharge, code) {

    let memoryPrice = updateMemoryPrice(memory).innerText;
    const finalMemoryPrice = parseInt(memoryPrice);
    let storagePrice = updateStoragePrice(storage).innerText;
    const finalStoragePrice = parseInt(storagePrice);
    let deliveryPrice = updateDeliveryPrice(deliverycharge).innerText;
    const finaldeliveryPrice = parseInt(deliveryPrice);





    let currentBalance = document.getElementById('best-price').innerText;
    let totalBalance = document.getElementById('total-price');
    totalBalance.innerText = finalMemoryPrice + finalStoragePrice + finaldeliveryPrice + parseInt(currentBalance);

    //bonus Part-1(Display Total price)
    let displayPrice = document.getElementById('display-price');
    displayPrice.innerText = totalBalance.innerText;

    //bonus Part-2(Applying Promo Code)
    code = document.getElementById('promo-code').value;
    if (code == 'stevekaku') {
        const reducingAmount = parseFloat(totalBalance.innerText) * .20;
        const afterPromoPrice = totalBalance.innerText - parseFloat(reducingAmount);
        displayPrice.innerText = afterPromoPrice;

    }



}



//Update memory price
document.getElementById('16gb-memory').addEventListener('click', function() {

    updateMemoryPrice('16gb');

    calculate('16gb');


});
document.getElementById('8gb-memory').addEventListener('click', function() {

    updateMemoryPrice('8gb');
    calculate('8gb');


});

//update Storage price 
document.getElementById('256gb-ssd').addEventListener('click', function() {

    updateStoragePrice('256gb-storage');
    calculate('256gb-storage');


});
document.getElementById('512gb-ssd').addEventListener('click', function() {

    updateStoragePrice('512gb-storage');
    calculate('512gb-storage');


});
document.getElementById('1tb-ssd').addEventListener('click', function() {

    updateStoragePrice('1tb-storage');
    calculate('1tb-storage');


});

//update delivery price
document.getElementById('without-delivery-charge').addEventListener('click', function() {

    updateDeliveryPrice('without-charge');
    calculate('without-charge');


});
document.getElementById('with-delivery-charge').addEventListener('click', function() {

    updateDeliveryPrice('with-charge');
    calculate('with-charge');


});

document.getElementById('code-entered').addEventListener('click', function() {

    calculate('stevekaku');
    document.getElementById('promo-code').value = '';
});