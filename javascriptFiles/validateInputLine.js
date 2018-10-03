/****************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns true if the current inputLine of the input file 
		  meets the input fields criteria.
****************************************************************/

function validateInputLine(inputLine)
{
	successfulValidation = false;
	
	//Check for total number of data items in the input line.
	if (!(inputLine.length == 5))
	{
		return false;
	}
	
	//Extracting input line into corresponding fields.
	[firstName, lastName, annualSalary, superRate, paymentPeriod] = inputLine;
	
	successfulValidation = validateSuperRate(superRate) && 
						   validateAnnualSalary(annualSalary) &&
						   validatePayPeriod(paymentPeriod);
						   
	return successfulValidation;
}