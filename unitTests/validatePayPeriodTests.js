/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Unit tests for validatePayPeriod method.
*********************************************************************/

QUnit.test( "validatePayPeriod when payment start date is 03/01/2018-03/31/2018", function( assert ) { 
	var value = validatePayPeriod("03/01/2018-03/31/2018"); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 2/01/2018-2/28/2018", function( assert ) { 
	var value = validatePayPeriod("2/01/2018-2/28/2018"); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 3/1/2018-3/31/2018", function( assert ) { 
	var value = validatePayPeriod("3/1/2018-3/31/2018"); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 3/1/2018-3/31/2018", function( assert ) { 
	var value = validatePayPeriod("3/1/2018-3/31/2018"); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 07/01/2017-07/31/2017", function( assert ) { 
	var value = validatePayPeriod("07/01/2017-07/31/2017"); 
	assert.equal( value, true, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 07/01/2017-07/31/2017", function( assert ) { 
	var value = validatePayPeriod("06/01/2017-06/30/2017"); 
	assert.equal( value, false, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 3/1/2018-3/15/2018", function( assert ) { 
	var value = validatePayPeriod("03/01/2018-03/15/2018"); 
	assert.equal( value, false, "Output should be false" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 01/01/2018-03/31/2018", function( assert ) { 
	var value = validatePayPeriod("01/01/2018-03/31/2018"); 
	assert.equal( value, false, "Output should be false" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 03/31/2018-03/03/2018", function( assert ) { 
	var value = validatePayPeriod("03/31/2018-03/03/2018"); 
	assert.equal( value, false, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 03/31/2018-31/03/2018", function( assert ) { 
	var value = validatePayPeriod("03/31/2018-03/03/2018"); 
	assert.equal( value, false, "Output should be true" ); 
});

QUnit.test( "validatePayPeriod when payment start date is 03/15/2018-03/31/2018", function( assert ) { 
	var value = validatePayPeriod("03/15/2018-03/31/2018"); 
	assert.equal( value, false, "Output should be true" ); 
});

