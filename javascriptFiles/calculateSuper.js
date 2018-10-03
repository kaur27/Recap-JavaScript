 /*************************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Returns super calculated from the gross income and super rate.
*************************************************************************/

 function calculateSuper(grossIncome, superRate) 
 {
	 if ((superRate <= 0)  || (isNaN(superRate)) || (superRate == null) 
		 || (grossIncome <=0) || (grossIncome == null) || (isNaN(grossIncome)))
	 {
		 return 0;
	 }
	 
	 return Math.round(grossIncome * superRate/100);
	
 }