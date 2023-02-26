// fetch("http://api.exchangeratesapi.io/v1/latest?access_key=52455a8d6ad69008e1f0e07661d84b5d")

// .then(res => res.json())
// .then(data => {
//     const date = data.date.split("-")
//     console.log(date);
// })

// //split - превращает в массиив 







let data = {
    date: "2022-06-05",
    rates: {
        AED: 3.89,
        KGS: 85.968,
        USD: 1.07,
        RUB: 80.34930
    }
}

const date = data.date.split("-").reverse("").join(".")
//сделали дату норм

const inputEur = document.getElementById("input-eur")

const inputCur = document.getElementById("input-cur")

const selectCur = document.getElementById("select-cur")

const title = document.querySelector(".title")

const rates = data.rates

title.innerHTML = `Currency Converter EUR (${date})`

for(let key in rates){
    selectCur.innerHTML += `<option value = ${rates[key]}>${key}</option>`
}

inputEur.addEventListener('input', function(e){
    inputCur.value = e.target.value + rates["AED"]
})

inputCur.addEventListener('input', function(e){
     inputEur.value = e.target.value / rates["AED"]
})

selectCur.addEventListener('change', function(e){
    let selectValue = e.target.value;
    inputCur.value = selectValue * inputEur.value
    input.addEventListener('input', function(e){
        inputCur.value = e.target.value * selectValue
    })

    inputCur.addEventListener('input', function(e){
        inputEur.value = e.target.value / selectValue
    })
})













