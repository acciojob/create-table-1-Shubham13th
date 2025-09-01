 function insert_Row() {
            //Write your code here
            const table = document.getElementById("sampleTable");
            const newRow = document.createElement("tr");
            newRow.innerHTML = "<td>New cell1</td><td>New cell2</td>";
            table.prepend(newRow);
        }