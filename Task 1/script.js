document.addEventListener("DOMContentLoaded",function(){
    fetchAndDisplayData();
})

function fetchAndDisplayData() {
    fetch('exchangerates.json')
     .then(response => response.json())
     .then(data => {
        let table = document.querySelector('.exchangerates');
        let headers = Object.keys(data[0]);
        let headerRow = document.createElement('tr');
        let selectElement = document.getElementById('valuta')

        headers.forEach(headerText => {
            let header = document.createElement('th');
            header.textContent = headerText.replace(/_/g," ")
            headerRow.appendChild(header);
        })

        let conversionHeader = document.createElement('th');
        conversionHeader.textContent = "Konverzija";
        headerRow.appendChild(conversionHeader)

        table.appendChild(headerRow);

        data.forEach((obj)=> {
            let dataRow = document.createElement('tr');
            let option = document.createElement('option');
            option.value = obj.valuta;
            option.textContent = `${obj.valuta}`
            selectElement.appendChild(option)

            Object.values(obj).forEach((value)=>{
                let data = document.createElement('td');
                data.textContent = value
                dataRow.appendChild(data)
            })

            let emptyConversionTd = document.createElement('td');
            emptyConversionTd.className = obj.valuta
            dataRow.appendChild(emptyConversionTd)

            table.appendChild(dataRow)

        })

        changeOrder()
        
     })

}



function changeOrder() {
    let firstRow = document.querySelector('.exchangerates tr:first-of-type');
    let thNodes = firstRow.querySelectorAll('th');

    let newOrder = [2, 3, 5, 4, 7,6]; 

    newOrder.forEach((index, i) => {
        firstRow.insertBefore(thNodes[index], firstRow.childNodes[i]);
    });

    let rows = document.querySelectorAll('.exchangerates tr:not(:first-of-type)');

    rows.forEach(row => {
        let tdNodes = row.querySelectorAll('td');
        newOrder.forEach((index, i) => {
            row.insertBefore(tdNodes[index], row.childNodes[i]);
        });
    });
}

async function convertCurrency() {
    let response = await fetch('exchangerates.json');
    let data = await response.json();

    let amount = parseFloat(document.getElementById('količina').value)
    let selectedCurrency = document.getElementById('valuta').value
    let selectedCurrencyData = data.find(data => data.valuta === selectedCurrency)
    let exchangeRate = selectedCurrencyData.srednji_tecaj.replace(',','.')


    data.forEach((data)=>{
        let cell = document.querySelector(`.${data.valuta}`)
        let rate = parseFloat(data.srednji_tecaj.replace(',','.'))
        let convertedAmount = (amount * parseFloat(exchangeRate) / rate).toFixed(2);
        let truncResult = truncateResult(convertedAmount,10)
        cell.textContent = removeDot(truncResult)
        
    })

}


function truncateResult(result,maxLength) {
    if(result.length > maxLength) {
        return result.substring(0,maxLength);
    }
    return result;
}


function removeDot(str) {
    return str.replace(/\.\d?$|\.$/, "");
}




