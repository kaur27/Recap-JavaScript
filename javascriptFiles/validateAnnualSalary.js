/***************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns true if annual salary is a positive integer.
***************************************************************/
function validateAnnualSalary(annualSalary)
{
	
	if((annualSalary == null) || (annualSalary < 0) || (isNaN(annualSalary)))
	{
		return false;
	}
	
	if(!isInt(annualSalary))
	{
		return false;
	}
	
	
	return true;
}

function isInt(value) 
{ 
	var x = parseFloat(value); 
	return (x | 0) === x; 
}