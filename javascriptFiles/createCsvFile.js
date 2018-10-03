/***************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Converts the diaplyed output to csv file.
***************************************************************/

function processTable()
{	 
	var csv = [];
	var rows = document.querySelectorAll("table tr");
	
    for (var i = 0; i < rows.length; i++)
	{
		var row = [], cols = rows[i].querySelectorAll("td, th");		
        for (var j = 0; j < cols.length; j++) 
		{
            row.push(cols[j].innerText);
		}      
		csv.push(row.join(","));		
	}
    downloadCSV(csv.join("\n"));
}
 
function downloadCSV(csv)
{
	//CSV FILE	
	csvFile = new Blob([csv], {type: "text/csv"});
	
    //Download link
    downloadLink = document.createElement("a");

    //File name
    downloadLink.download = 'employeePaySlips.csv';

    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
 }