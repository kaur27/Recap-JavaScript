/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Unit tests for validateAnnualSalary method.
*********************************************************************/

QUnit.test( "validateAnnualSalary when annual salary is 0", function( assert ) { 
	var value = validateAnnualSalary(0); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validateAnnualSalary when annual salary is 1200.50", function( assert ) { 
	var value = validateAnnualSalary(1200.50); 
	assert.equal( value, false, "Output should be false" ); 
});

QUnit.test( "validateAnnualSalary when annual salary is 0.121212121212121212112", function( assert ) { 
	var value = validateAnnualSalary(0.121212121212121212112); 
	assert.equal( value, false, "Output should be false" ); 
});

QUnit.test( "validateAnnualSalary when annual salary is null", function( assert ) { 
	var value = validateAnnualSalary(); 
	assert.equal( value, false, "Output should be false" ); 
});

QUnit.test( "validateAnnualSalary when annual salary is -1000", function( assert ) { 
	var value = validateAnnualSalary(-1000); 
	assert.equal( value, false, "Output should be false" ); 
});


