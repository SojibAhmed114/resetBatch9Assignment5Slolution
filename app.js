const selectedSeatElement = document.getElementById('selected-seat');
const deleteMe = document.getElementById('deleleMe');
const totalBooked = document.getElementById('seatCount');
const availableSeats = document.getElementById('availableSeat');
const totalPriceEl = document.getElementById('total-price');
const couponFieldEl = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const grandPrice = document.getElementById('grandTotal');
const nextButton = document.getElementById('btn-next');



const totalBookedSeat = [];
let totalPrice = 0;
function selectBtnAppend(event){
    // same btn not two clicked
    const values = event.innerText;
    if(totalBookedSeat.includes(values)){
        return alert('this seat already booked')
    };

    //max 4 seat buy
    if (totalBookedSeat.length < 4){

    event.classList.add('bg-green-500', 'hover:bg-green-700');

    //no seat booking 
    deleteMe.classList.add('hidden');
    selectedSeatElement.innerHTML +=`
    <li class="flex justify-between">
            <span>${event.innerText}</span>
            <span>Economic seat</span>
            <span>550</span>
    </li>
    `

    totalBookedSeat.push(event.innerText);
    //seat book count 
    totalBooked.innerText = totalBookedSeat.length;

    //decrease seat
    const availableSeatValue = parseInt(availableSeats.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeats.innerText = newAvailableSeatValue;

    // total price
    totalPrice += 550;
    totalPriceEl.innerText = totalPrice;

    //coupon button active 
    if (totalBookedSeat.length > 3) {
        couponFieldEl.removeAttribute('disabled');
        couponBtn.removeAttribute('disabled');
    }

    }
    else{
        return alert('maximun seat booked');
    }
};


// coupon btn apply discount

document.getElementById('coupon-btn').addEventListener('click', function(){
    const couponFieldValue = couponFieldEl.value;
    let couponSave = 0;
    if(couponFieldValue !== "NEW50" && couponFieldValue !== "Couple 20"){
        return alert('Your Coupon is wrong');
    };

    if (couponFieldValue === 'NEW50') {
        couponSave = totalPrice * 0.15;
    }
    else if(couponFieldValue === 'Couple 20'){
        couponSave = totalPrice * 0.20;
    };

    const couponContainer = document.getElementById('coupon-Container');
    couponContainer.innerHTML = `
    <p>Discount: </p>
    <p> -BDT <span>${couponSave}</span></p>
    
    `

    const grandPriceValues = totalPrice - couponSave;
    grandPrice.innerText = grandPriceValues;
});


// next button 
document.getElementById('phone-Number-input').addEventListener('input', function(event){
    const inputValue = event.target.value;
    if(inputValue.length >=11){
        nextButton.removeAttribute('disabled');
    }    

})


//continueReset
document.getElementById('continueReset').addEventListener('click', function(){
    window.location.reload();
})