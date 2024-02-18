// function searchPrtbohan(){
//     const phPoribahan = document.getElementById('ph-poribahan');
// }

const tickets = document.getElementsByClassName('ticket');
let count = 0;
let seatLeft = 0
for (const singleTicket of tickets) {
    singleTicket.addEventListener('click', function(){
        count = count + 1;
        ticketCollection('seat-count',count);

        // ------second step --------------
        const singleTicketValue = singleTicket.innerText;
       console.log(singleTicketValue);

        // -------- Function use ------------
        const singleTickePrice = inntextSelectAndNumberConvert('single-ticket-price');
        const totalPrice = inntextSelectAndNumberConvert('total-price');
        // console.log(singleTickePrice, totalPrice);
        sumPrice('total-price',singleTickePrice)
          

        const ticketNameAdd = document.getElementById('ticketName-add');
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = singleTicketValue;
        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';
        const p3 = document.createElement('p');
        p3.innerText = singleTickePrice;
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p3);
        ticketNameAdd.appendChild(div)

    })
}

function sumPrice(elementId,value){
    const totalAmount = document.getElementById('total-price').innerText;
    const convertTotalAmount = parseInt(totalAmount);
    const sum = convertTotalAmount + value;
    ticketCollection(elementId,sum)
}

function inntextSelectAndNumberConvert(elementId){
    const element = document.getElementById(elementId).innerText;
    const convertNumber = parseInt(element);
    return convertNumber;
}

function ticketCollection(elementId,value){
    const ticket = document.getElementById(elementId).innerText = value;
}