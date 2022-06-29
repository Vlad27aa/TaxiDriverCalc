document.querySelector('.button').onclick = check

function check() {
    const income = Number(document.querySelector('.income').value)
    const tips = Number(document.querySelector('.tips').value)
    const distance = Number(document.querySelector('.distance').value)
    const fuelPrice = Number(document.querySelector('.fuelPrice').value)
    const fuelСonsumption = Number(document.querySelector('.fuelСonsumption').value)
    const hoursWorked = Number(document.querySelector('.hoursWorked').value)
    const dinner = Number(document.querySelector('.dinner').value)
    const amortizationValue = Number(document.querySelector('.amortizationValue').value)
    const amortization = distance * amortizationValue
    const costOneKm = fuelPrice * fuelСonsumption / 100
    const costFullDistance = Math.round(costOneKm * distance)
    const profit = income + tips - costFullDistance - amortization - dinner

    const outResult = 
    'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
    `Затраты на топливо - ${costFullDistance} грн` + '<br>' + 
    `Амортизация - ${amortization} грн` + '<br>' +
    'Чистые в час - ' + Math.round(profit / hoursWorked) + ' грн' + '<br>' +
    `Чистый заработок - ${profit} грн`

    

    document.querySelector('.out').innerHTML = outResult
   
    

}
