/**************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Main file handling method that reads the file, calls 
		  computation methods to generate the final output.
**************************************************************/

var grossIncome;
var incomeTax;
var netIncome;
var superValue;
var isValidInputLine;
var errorsFound;
 
function handleError(evt) 
{
	if(evt.target.error.name == "NotReadableError")
	{
		alert("Cannot read the input file.");
	}
}
 
function onLoadCall(event) 
{
	var csv = event.target.result;
	var inputLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (inputLines.length)
	{
        lines.push(inputLines.shift().split(','));
    }	
	generateOutput(lines);            
}
 
function getAsText(fileToRead)
{     	
	var reader = new FileReader();
	reader.onload = onLoadCall;
	reader.onerror = handleError;
	//Read file into memory.
	reader.readAsText(fileToRead);
}
 
function handleFiles(files) 
{
	if (window.FileReader) 
	{
		//Checking FileReader is supported.
		getAsText(files[0]);
	} else 
	{
		alert('FileReader are not supported in this browser.');
	}
}
 