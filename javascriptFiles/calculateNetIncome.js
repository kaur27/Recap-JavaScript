/****************************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Returns net income calculated from the gross income and income tax.
****************************************************************************/

function calculateNetIncome(grossIncome, incomeTax)
{
	//Income Tax will never be practically greater than gross incomeTax
	//Added the check for proper unit testing
	if ((grossIncome <= 0) || (incomeTax > grossIncome))
	{
		return 0;
	}
	return  (grossIncome - incomeTax);
}