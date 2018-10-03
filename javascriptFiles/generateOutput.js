/**********************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Iterates through every input line and populates the dynamic 
		  table with the output if the input line has no errors.
*********************************************************************/

function generateOutput(lines)
{
	document.getElementById("output").innerHTML = "";
	errorsFound = false;
	var table = document.createElement("table");
	table.style.borderSpacing = "30px";
	table.style.border = "thin solid black";
	//Create the Header row of the Output table.
	var header = table.createTHead();
	var row = header.insertRow(-1);
	var cell = row.insertCell(0);
	cell.innerHTML = "<b>Name</b>";
	cell = row.insertCell(1);
	cell.innerHTML = "<b>Pay Period</b>";
	cell = row.insertCell(2);
	cell.innerHTML = "<b>Gross Income</b>";
	cell = row.insertCell(3);
	cell.innerHTML = "<b>Income Tax</b>";
	cell = row.insertCell(4);
	cell.innerHTML = "<b>Net Income</b>";
	cell = row.insertCell(5);
	cell.innerHTML = "<b>Super</b>";
	
	var totalLines = lines.length;
	
	for (var i = 1; i < totalLines; i++) 
	{
		var blankLineFound = isABlankLine(lines[i]);
		//Skip blank lines if found in the middle of the uploaded file.
		if ((i < (totalLines-1))  && blankLineFound)
		{
			continue;
		}
		
		//Ignore blank line at the end of the uploaded file.
		if (i == (totalLines - 1) && blankLineFound)
		{
			break;
		}
		
		//To wipe out any previous errors.
		document.getElementById("error").innerHTML = "";
		
		isValidInputLine = validateInputLine(lines[i]);
		
		if (!isValidInputLine)
		{
			errorsFound = true;
			var errorParagraph = document.createElement("P");
			var errorMessage = document.createTextNode("Line at index " + (i+1) + " of the input file does not meet the input data criteria.\n");
			errorParagraph.appendChild(errorMessage);
			var lineBreak = document.createElement("br");
			document.getElementById("error").appendChild(errorMessage);
			document.getElementById("error").appendChild(lineBreak);
			break;
		}
				
		//Create a new row.
		var row = table.insertRow(-1);
		
		//outputLine array holds the final calculated values.
		var outputLine = generateOutputLine(lines[i]);
		
		var firstCell = row.insertCell(0);
		firstCell.appendChild(document.createTextNode(outputLine[0]));
		var cell = row.insertCell(1);
		cell.innerHTML = outputLine[1];
		cell = row.insertCell(2);
		cell.innerHTML = outputLine[2];
		cell = row.insertCell(3);
		cell.innerHTML = outputLine[3];
		cell = row.insertCell(4);
		cell.innerHTML = outputLine[4];
		cell = row.insertCell(5);
		cell.innerHTML = outputLine[5];
	}
		
	
	//Create Download button only if all lines of the input file are processed without any errors.
	if(!errorsFound)
	{
		document.getElementById("output").appendChild(table);
	
		//Create download button. 
		var btn = document.createElement("button");    
		var text = document.createTextNode("Download CSV");       
		btn.appendChild(text);
		btn.style.marginTop="10px";
		btn.style.float="right";
		btn.style.marginRight="15%";
		btn.addEventListener ("click", function() {processTable();});
		document.getElementById("output").appendChild(btn); 
	}
	
	//Clear the instance of the file.
	document.getElementById("csvFileInput").value = "";
 }