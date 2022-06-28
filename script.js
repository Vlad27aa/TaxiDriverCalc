document.querySelector('.button').onclick = check

function check() {
    const income = Number(document.querySelector('.income').value)
    const tips = Number(document.querySelector('.tips').value)
    let distance = Number(document.querySelector('.distance').value)
    const fuelPrice = Number(document.querySelector('.fuelPrice').value)
    const fuelСonsumption = Number(document.querySelector('.fuelСonsumption').value)
    const hoursWorked = Number(document.querySelector('.hoursWorked').value)
    const amortization = distance * 1.5
    const costOneKm = fuelPrice * fuelСonsumption / 100
    const costFullDistance = Math.round(costOneKm * distance)
    let profit = income + tips - costFullDistance - amortization
    let coefficient = (profit / distance).toFixed(2)

    const outResult = 
    'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
    `Стоимость одного километра - ${costOneKm} грн` + '<br>' +
    `Затраты на топливо - ${costFullDistance} грн` + '<br>' + 
    `Аммортизация (1.5 грн/км) - ${amortization} грн` + '<br>' +
    `Коэфициент - ${coefficient}` + '<br>' +
    'Чистый заработок в час - ' + Math.round(profit / hoursWorked) + ' грн' + '<br>' +
    `Чистый заработок - ${profit} грн`

    document.querySelector('.out').innerHTML = outResult

}