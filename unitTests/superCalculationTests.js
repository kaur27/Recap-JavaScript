/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 15/09/2018
Function: Unit tests for calculateSuper method.
*********************************************************************/

QUnit.test( "calculateSuper when gross income is positive and super rate is 0", function( assert ) { 
	var value = calculateSuper(100, 0); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateSuper when gross income is 0 and super rate is 0", function( assert ) { 
	var value = calculateSuper(0, 0); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateSuper when gross income is 0 and super rate is 10", function( assert ) { 
	var value = calculateSuper(0, 10); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateSuper when gross income is 100 and super rate is 10", function( assert ) { 
	var value = calculateSuper(100, 10); 
	assert.equal( value, "10", "Output should be 10" ); 
});

QUnit.test( "calculateSuper when gross income is 100 and super rate is a 10.99", function( assert ) { 
	var value = calculateSuper(100, 10.99); 
	assert.equal( value, "11", "Output should be 11" ); 
});

QUnit.test( "calculateSuper when gross income is -100 and super rate is 10", function( assert ) { 
	var value = calculateSuper(-100, 10); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateSuper when gross income is 100 and super is -10", function( assert ) { 
	var value = calculateSuper(100, -10); 
	assert.equal( value, "0", "Output should be 0" ); 
});


QUnit.test( "calculateSuper when super is 'abc'", function( assert ) { 
	var value = calculateSuper(100, 'abc'); 
	assert.equal( value, "0", "Output should be 0" ); 
});
