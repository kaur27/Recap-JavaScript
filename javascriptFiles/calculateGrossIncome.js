/*************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Returns gross income based on the annual salary.
*************************************************************/

function calculateGrossIncome(annualSalary) 
{
	if(annualSalary != null && annualSalary > 0 &&  (!isNaN(annualSalary))) 
	{
		return Math.round(annualSalary/12);
	}
	else
	{
		return 0;
	}
 }
 