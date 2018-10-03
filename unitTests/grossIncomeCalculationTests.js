/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Unit tests for calculateGrossIncome method.
*********************************************************************/
	
QUnit.test( "calculateGrossIncome when data is to be rounded down", function( assert ) { 
	var value = calculateGrossIncome(60050); 
	assert.equal( value, "5004", "For input = 60050, output should be 5004" ); 
}); 

QUnit.test( "calculateGrossIncome when data is to be rounded up", function( assert ) { 
	var value = calculateGrossIncome(60010); 
	assert.equal( value, "5001", "When input = 60010, output should be 5001" ); 
});

QUnit.test( "calculateGrossIncome when input salary is zero", function( assert ) { 
	var value = calculateGrossIncome(0); 
	assert.equal( value, "0", "When input = 0, output should be 0" ); 
});

QUnit.test( "calculateGrossIncome when input salary is null", function( assert ) { 
	var value = calculateGrossIncome(); 
	assert.equal( value, "0", "When input = null, output should be 0" ); 
});

QUnit.test( "calculateGrossIncome when input salary is negative", function( assert ) { 
	var value = calculateGrossIncome(-12000); 
	assert.equal( value, "0", "When input = -12000, output should be 0" ); 
});

QUnit.test( "calculateGrossIncome when input salary is alphabet", function( assert ) { 
	var value = calculateGrossIncome('abc'); 
	assert.equal( value, "0", "When input = 'abc', output should be 0" ); 
});

QUnit.test( "calculateGrossIncome when input salary is alphanumeric", function( assert ) { 
	var value = calculateGrossIncome("abc123"); 
	assert.equal( value, "0", "When input = 'abc123', output should be 0" ); 
});