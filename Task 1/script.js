document.addEventListener("DOMContentLoaded",function(){
    fetchDataAndDisplayTable();
})

function fetchDataAndDisplayTable() {
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
            const option = document.createElement('option');
            option.value = obj.valuta;
            option.textContent = `${obj.valuta}`
            selectElement.appendChild(option)

            Object.values(obj).forEach((value)=>{
                let data = document.createElement('td');
                data.textContent = value
                dataRow.appendChild(data)
            })

            let emptyConversionTd = document.createElement('td');
            dataRow.appendChild(emptyConversionTd)

            table.appendChild(dataRow)

        })

        changeOrder()
        
     })

}



function changeOrder(){

    let firstRow = document.querySelector('.exchangerates tr:first-of-type')

    let thirdTh = firstRow.querySelector('th:nth-of-type(3)')
    let fourthTh = firstRow.querySelector('th:nth-of-type(4)')
    let sixthTh = firstRow.querySelector('th:nth-of-type(6)')
    let fifthTh = firstRow.querySelector('th:nth-of-type(5)')
    let seventhTh = firstRow.querySelector('th:nth-of-type(7)')

    firstRow.insertBefore(thirdTh, firstRow.childNodes[0])
    firstRow.insertBefore(fourthTh, firstRow.childNodes[1]);
    firstRow.insertBefore(sixthTh, firstRow.childNodes[2]);
    firstRow.insertBefore(fifthTh, firstRow.childNodes[3]);
    firstRow.insertBefore(seventhTh, firstRow.childNodes[4]);


    let rows = document.querySelectorAll('.exchangerates tr:not(:first-of-type)')
    rows.forEach((row)=>{
        let thirdTd = row.querySelector('td:nth-of-type(3)')
        let fourthTd = row.querySelector('td:nth-of-type(4)')
        let sixthTd = row.querySelector('td:nth-of-type(6)')
        let fifthTd = row.querySelector('td:nth-of-type(5)')
        let seventhTd = row.querySelector('td:nth-of-type(7)')
        row.insertBefore(thirdTd, row.childNodes[0])
        row.insertBefore(fourthTd, row.childNodes[1])
        row.insertBefore(sixthTd, row.childNodes[2])
        row.insertBefore(fifthTd, row.childNodes[3])
        row.insertBefore(seventhTd, row.childNodes[4])
    })
}

