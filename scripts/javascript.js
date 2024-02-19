
const tickets = document.getElementsByClassName('ticket');
let count = 0;
let selectTicketCount = 0;
for (const singleTicket of tickets) {
    singleTicket.addEventListener('click', function () {

        // ----------- counting part start -----------------
        count = count + 1;
        ticketCollection('seat-count', count);
        const seatLeft = document.getElementById('seat-left').innerText;
        const convertSeatLeft = parseInt(seatLeft)
        document.getElementById('seat-left').innerText = convertSeatLeft - 1;
        // ----------- counting part end --------------------


        //------- function call and id pass --------------
        const singleTicketValue = singleTicket.innerText;
        const singleTickePrice = inntextSelectAndNumberConvert('single-ticket-price');
        const totalPrice = inntextSelectAndNumberConvert('total-price');
        sumPrice('total-price', singleTickePrice);
        grandTotal('grand-total-price', singleTickePrice);


        // ticket selected condition-----------
        const seatCount = inntextSelectAndNumberConvert('seat-count')
        if (seatCount == 4) {
            const applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
            applyBtn.classList.add('bg-green-400')
        }
        else if (seatCount > 4) {
            alert('Your requirement ticket maximum count 4')
            return;
        }
        singleTicket.style.backgroundColor = 'green';
        singleTicket.style.color = 'white';


        // ------append ticket part start--------------------//
        const ticketNameAdd = document.getElementById('ticketName-add');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class = 'flex justify-between'>
        <p>${singleTicketValue}</p>
        <p>Economoy</p>
        <p>${singleTickePrice}</p>
        </div>
        `
        ticketNameAdd.appendChild(div)
    })
}





// ----------cuppon code part start----------//

const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {
    const cuponCode = document.getElementById('copupon-code');
    const cuponCodeValue = cuponCode.value;
    const convertCuponCodeValue = cuponCodeValue.split('').join('').toUpperCase();

    if (cuponCodeValue === 'NEW 15') {
        let discountTotal = inntextSelectAndNumberConvert('grand-total-price');
        const discountPrice = discountTotal * 15 / 100;
        discountTotal = discountTotal - discountPrice
        document.getElementById('grand-total-price').innerText = discountTotal

        const updatePriceNameSet = document.getElementById('update-grand');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class = 'flex justify-between'>
            <p>discount grand total</p>
            <p>330</p>
            </div>
            `
        updatePriceNameSet.appendChild(div);
        const hiddenAdd = document.getElementById('hidden-add');
        hiddenAdd.classList.add('hidden')
    }
    else if (cuponCodeValue === 'Couple 20') {
        let discountTotal = inntextSelectAndNumberConvert('grand-total-price');
        const discountPrice = discountTotal * 20 / 100;
        discountTotal = discountTotal - discountPrice
        document.getElementById('grand-total-price').innerText = discountTotal

        const updatePriceNameSet = document.getElementById('update-grand');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class = 'flex justify-between'>
            <p>discount grand total</p>
            <p>440</p>
            </div>
            `
        updatePriceNameSet.appendChild(div);
        const hiddenAdd = document.getElementById('hidden-add');
        hiddenAdd.classList.add('hidden')
    }
    else {
        alert('invalid cupon')
    }
})



// ----------cuppon code part end----------//
const nextBtn = document.getElementById('next-btn');
const phoneNumber = document.getElementById('phone-number').addEventListener('keyup', function (event) {
    const element = event.target.value;
    if (element.length > 10) {
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.add('bg-green-400');
    }
    else {
        nextBtn.setAttribute('disabled', true);
        nextBtn.classList.add('bg-green-200');
    }
});



function sumPrice(elementId, value) {
    const totalAmount = document.getElementById('total-price').innerText;
    const convertTotalAmount = parseInt(totalAmount);
    const sum = convertTotalAmount + value;
    ticketCollection(elementId, sum)
}

function grandTotal(elementId, value) {
    const totalAmount = document.getElementById('grand-total-price').innerText;
    const convertTotalAmount = parseInt(totalAmount);
    const sum = convertTotalAmount + value;
    ticketCollection(elementId, sum)
}

function inntextSelectAndNumberConvert(elementId) {
    const element = document.getElementById(elementId).innerText;
    const convertNumber = parseInt(element);
    return convertNumber;
}

function ticketCollection(elementId, value) {
    const ticket = document.getElementById(elementId).innerText = value;
}