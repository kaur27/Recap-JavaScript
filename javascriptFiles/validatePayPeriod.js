/***************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Returns true if the pay period is of a month and is 
		  greater than June 2017 as the income tax rules are
		  valid from July 2017. Valid pay period format is
		  mm/dd/yyyy - mm/dd/yyyy.
***************************************************************/

function validatePayPeriod(paymentPeriod)
{
	var dates = paymentPeriod.split("-");
	var startDate = dates[0].trim();
	var endDate = dates[1].trim();
	
	//Extracting the start and the end date components
	var startDateYear = new Date(startDate).getFullYear();
	var endDateYear = new Date(endDate).getFullYear();
	var startDateMonth = new Date(startDate).getMonth();
	var endDateMonth = new Date(endDate).getMonth();
	var startDateDay = new Date(startDate).getDate();
	var endDateDay = new Date(endDate).getDate();
	
	//Check if date is beyond June 2016.
	if(startDateMonth < 6 && startDateYear <= 2017)
	{
		return false;
	}
	
	if(startDateYear != endDateYear)
	{
      return false;
    }
	
	if(startDateMonth != endDateMonth) 
	{
      return false;
    }
	
	if(startDateDay > endDateDay) 
	{
      return false;
    }
	
	
	var days = daysInMonth(startDateMonth,startDateYear);
	
	//Check if the start date is the first of a given month and last date is the last day of the month.
	if(!((startDateDay == 1) && (endDateDay == days))) 
	{
      return false;
    }
	
	return true;
}


function daysInMonth (month, year) 
{
    return new Date(year, month+1, 0).getDate();
}
