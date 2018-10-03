/**********************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns false if it is an invalid super rate.
*********************************************************************/

function validateSuperRate(superRate)
{
	var percentageRegex = /^([0-9]([0-9])?|0)(\.[0-9]{1,2})?(%)/;
	//Check for a valid percentage .
	if (!superRate.match(percentageRegex))
	{
		return false;
	
	}
	
	//Check if percentage is in 0 t0 50 range.
	let superRateInFloat = parseFloat(superRate);
	if (isNaN(superRateInFloat) || (superRateInFloat < 0) || (superRateInFloat > 50) )
	{
		return false;
	}
	
	return true;
}
