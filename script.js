 function insert_Row() {
            //Write your code here
          const table = document.getElementById("sampleTable");
            
            const newRow = table.insertRow(0);

            const newCell1 = newRow.insertCell(0);
            const newCell2 = newRow.insertCell(1);

            newCell1.textContent = "New cell1";
            newCell2.textContent = "New cell2";
        }