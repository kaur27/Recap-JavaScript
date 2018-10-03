/*********************************************************************
Name	: Dhanmeet Kaur
Date	: 16/09/2018
Function: Unit tests for validateSuperRate method.
*********************************************************************/

QUnit.test( "validateSuperRate when super rate is 10%", function( assert ) { 
	var value = validateSuperRate("10%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 0.01%", function( assert ) { 
	var value = validateSuperRate("0.01%"); 
	assert.equal(value, true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 50%", function( assert ) { 
	var value = validateSuperRate("50%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 0.50%", function( assert ) { 
	var value = validateSuperRate("0.50%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 50.00%", function( assert ) { 
	var value = validateSuperRate("50.00%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 0%", function( assert ) { 
	var value = validateSuperRate("0%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is 0.0%", function( assert ) { 
	var value = validateSuperRate("0.0%"); 
	assert.ok(true, "Should return true.")
});

QUnit.test( "validateSuperRate when super rate is -10%", function( assert ) { 
	var value = validateSuperRate("-10%"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is 10$", function( assert ) { 
	var value = validateSuperRate("10$"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is %10", function( assert ) { 
	var value = validateSuperRate("%10"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is 50.01%", function( assert ) { 
	var value = validateSuperRate("50.01%"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is 50.123%", function( assert ) { 
	var value = validateSuperRate("50.123%"); 
	assert.equal(value, false, "Should return false.")
});



QUnit.test( "validateSuperRate when super rate is .01", function( assert ) { 
	var value = validateSuperRate(".01"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is abc", function( assert ) { 
	var value = validateSuperRate("abc"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is 99", function( assert ) { 
	var value = validateSuperRate("99"); 
	assert.equal(value, false, "Should return false.")
});

QUnit.test( "validateSuperRate when super rate is 10", function( assert ) { 
	var value = validateSuperRate("10"); 
	assert.equal(value, false, "Should return false.")
});
