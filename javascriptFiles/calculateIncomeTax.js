/****************************************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Returns monthly income tax based on the annual salary and the income tax 
		  rules for the year 2017 -2108 applicable from 1 July 2018.
****************************************************************************************/

function calculateIncomeTax(annualSalary) 
{
	//additional checks
	if (annualSalary == null || annualSalary < 0 || isNaN(annualSalary))
	{
		return 0;
	}
	
	if(annualSalary >= 180001) 
	{
		var basicTax = 54232;
		var annualTax = basicTax + (annualSalary - 180000) * 0.45;
		var monthlyTax = Math.round(annualTax/12);
		return monthlyTax;
	} 
	else if(annualSalary >= 87001) 
	{
		var basicTax = 19822;
		var annualTax = basicTax + (annualSalary - 87000) * 0.37;
		var monthlyTax = Math.round(annualTax/12);
		return monthlyTax;
	} 
	else if(annualSalary >= 37001)
	{
		var basicTax = 3572;
		var annualTax = basicTax + (annualSalary - 37000) * 0.325;
		var monthlyTax = Math.round(annualTax/12);
		return monthlyTax;
	} 
	else if(annualSalary >= 18201)
	{
		var basicTax = 0;
		var annualTax = basicTax + (annualSalary - 18200) * 0.19;
		var monthlyTax = Math.round(annualTax/12);
		return monthlyTax;
	} 
	else
	{
		var monthlyTax = 0;
		return monthlyTax;
	}
	
 }