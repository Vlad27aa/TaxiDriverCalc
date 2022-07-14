document.querySelector('.button').onclick = check

function check() {
    const income = Number(document.querySelector('.income').value)
    const tips = Number(document.querySelector('.tips').value)
    const distance = Number(document.querySelector('.distance').value)
    const fuelPrice = Number(document.querySelector('.fuelPrice').value)
    const fuelСonsumption = Number(document.querySelector('.fuelСonsumption').value)
    let hoursWorked = Number(document.querySelector('.hoursWorked').value)
    const dinner = Number(document.querySelector('.dinner').value)
    const amortizationValue = Number(document.querySelector('.amortizationValue').value)
    const amortization = distance * amortizationValue
    const costOneKm = fuelPrice * fuelСonsumption / 100
    const costFullDistance = Math.round(costOneKm * distance)
    const profit = income + tips - costFullDistance - amortization - dinner
    const amountFuel = (fuelСonsumption / 100 * distance).toFixed(2)

    if (!income && !tips && !distance && !fuelPrice && !fuelСonsumption && !hoursWorked && !dinner && !amortizationValue) {

        document.querySelector('.out').innerHTML = 'Ничего не указано :('

    } else if( (distance && fuelPrice && fuelСonsumption) && (tips || hoursWorked || dinner || amortizationValue) && !income ) {

        document.querySelector('.out').innerHTML = 'Укажите кассу!'
    
    } else if (!distance || !fuelPrice || !fuelСonsumption) {

        document.querySelector('.out').innerHTML = 'Укажите важные параметры:' + '<br>' + '*Пробег' + '<br>' + '*Цена топлива' + '<br>' + '*Расход топлива'

    } else if (!income && !tips && !hoursWorked && !dinner && !amortizationValue) {

        document.querySelector('.out').innerHTML = `На топливо - ${costFullDistance} грн` + '<br>' + '(' + amountFuel + ' л)' +'<br>' + '<br>' + '(без кассы просчитывается затраты поездки на топливо)'

    } else if (hoursWorked == 0 && amortizationValue == 0) {
        const outResult = 
        'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
        `На топливо - ${costFullDistance} грн` + '<br>' + 
        `Чистые - ${profit} грн`

        document.querySelector('.out').innerHTML = outResult

    } else if (hoursWorked == 0) {
        const outResult = 
        'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
        `На топливо - ${costFullDistance} грн` + '<br>' + 
        `На амортизацию - ${amortization} грн` + '<br>' +
        `Чистые - ${profit} грн`

        document.querySelector('.out').innerHTML = outResult

    } else if (amortizationValue == 0) {
        const outResult =
        'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
        `На топливо - ${costFullDistance} грн` + '<br>' + 
        'Чистые в час - ' + Math.round(profit / hoursWorked) + ' грн' + '<br>' +
        `Чистые - ${profit} грн`

        document.querySelector('.out').innerHTML = outResult
        
    } else {
        const outResult = 
        'Касса с чаевыми - ' + (income + tips) + ' грн' + '<br>' +
        `На топливо - ${costFullDistance} грн` + '<br>' + 
        `На амортизацию - ${amortization} грн` + '<br>' +
        'Чистые в час - ' + Math.round(profit / hoursWorked) + ' грн' + '<br>' +
        `Чистые - ${profit} грн`

        document.querySelector('.out').innerHTML = outResult
    }
}
