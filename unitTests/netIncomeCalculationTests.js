/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Unit tests for calculateNetIncome method.
*********************************************************************/

QUnit.test( "calculateNetIncome when gross income is 0 and income tax is 0", function( assert ) { 
	var value = calculateNetIncome(0, 0); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateNetIncome when gross income is 0 and income tax is -100", function( assert ) { 
	var value = calculateNetIncome(0,-100); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateNetIncome when gross income is 0 and income tax is -100", function( assert ) { 
	var value = calculateNetIncome(0,100); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateNetIncome when gross income is 100 and income tax is 10", function( assert ) { 
	var value = calculateNetIncome(100,10); 
	assert.equal( value, "90", "Output should be 90" ); 
});

QUnit.test( "calculateNetIncome when gross income is 10 and income tax is 10", function( assert ) { 
	var value = calculateNetIncome(10,10); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateNetIncome when gross income is 10 and income tax is 90", function( assert ) { 
	var value = calculateNetIncome(10,90); 
	assert.equal( value, "0", "Output should be 0" ); 
});