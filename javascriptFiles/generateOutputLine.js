/**********************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns 'outputLine' array with the final computed values that
		  are to be displayed.
*********************************************************************/

function generateOutputLine(inputLine)
{
	var outputLine = [];
	[firstName, lastName, annualSalary, superRate, paymentPeriod] = inputLine;
	
	let name = firstName + " " + lastName;
	let payPeriod = paymentPeriod;
	let grossIncome = calculateGrossIncome(annualSalary);
	let incomeTax = calculateIncomeTax(annualSalary);
	let netIncome = calculateNetIncome(grossIncome,incomeTax);
	let superValue = calculateSuper(grossIncome, parseFloat(superRate));
	
	outputLine = [name, payPeriod, grossIncome, incomeTax, netIncome, superValue];
	
	return outputLine;
}