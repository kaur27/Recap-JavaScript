/**************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns true if the current inputLine of the input file 
		  is blank.
****************************************************************/

function isABlankLine(inputLine)
{
	//Extracting array elements into variables
	[firstName, lastName, annualSalary, superRate, paymentPeriod] = inputLine;
	if ((firstName.length == 0)) 
	{
		return true;
	}
	return false;
}