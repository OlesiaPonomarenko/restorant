const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);
const btnTip = document.querySelector('#addTip');



function calculateAmount(e) {
    e.preventDefault();
    const bill = Number(document.querySelector('#bill').value);
    const people = Number(document.querySelector('#people').value);
    const tip = Number(document.querySelector('#tip').value);

    if (!bill || !people  || people <= 0) {
        Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please, write correct information!"
        });
        
        return;
    }

    let amountPerson = bill / people;
    let tipPerPerson = (bill * tip) / people;
    let totalSum = amountPerson + tipPerPerson;

    document.querySelector('#dividedBill').textContent = amountPerson.toFixed(2);
    document.querySelector('#dividedTip').textContent = tipPerPerson.toFixed(2);
    document.querySelector('#billAndTip').textContent = totalSum.toFixed(2);

}


btnTip.addEventListener('click', (e) => {
    e.preventDefault();
    tip.style.display = 'block';
})
