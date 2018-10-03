
QUnit.test( "calculateIncomeTax when annual salary is a negative number", function( assert ) { 
	var value = calculateIncomeTax(-1200); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is non numeric", function( assert ) { 
	var value = calculateIncomeTax("abc123"); 
	assert.equal( value, "0", "Output should be 0" ); 
});  

QUnit.test( "calculateIncomeTax when annual salary is null", function( assert ) { 
	var value = calculateIncomeTax(); 
	assert.equal( value, "0", "Output should be 0" ); 
}); 

QUnit.test( "calculateIncomeTax when annual salary is 0", function( assert ) { 
	var value = calculateIncomeTax(0); 
	assert.equal( value, "0", "Output should be 0" ); 
}); 

QUnit.test( "calculateIncomeTax when annual salary is 16000", function( assert ) { 
	var value = calculateIncomeTax(16000); 
	assert.equal( value, "0", "Output should be 0" ); 
}); 

QUnit.test( "calculateIncomeTax when annual salary is 18200", function( assert ) { 
	var value = calculateIncomeTax(18200); 
	assert.equal( value, "0", "Output should be 0" ); 
}); 

QUnit.test( "calculateIncomeTax when annual salary is 18201", function( assert ) { 
	var value = calculateIncomeTax(18201); 
	assert.equal( value, "0", "Output should be 0" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 25000", function( assert ) { 
	var value = calculateIncomeTax(25000); 
	assert.equal( value, "108", "Output should be 108" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 37000", function( assert ) { 
	var value = calculateIncomeTax(37000); 
	assert.equal( value, "298", "Output should be 298" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 37001", function( assert ) { 
	var value = calculateIncomeTax(37001); 
	assert.equal( value, "298", "Output should be 298" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 60000", function( assert ) { 
	var value = calculateIncomeTax(60000); 
	assert.equal( value, "921", "Output should be 921" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 87000", function( assert ) { 
	var value = calculateIncomeTax(87000); 
	assert.equal( value, "1652", "Output should be 1652" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 87001", function( assert ) { 
	var value = calculateIncomeTax(87001); 
	assert.equal( value, "1652", "Output should be 1652" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 100000", function( assert ) { 
	var value = calculateIncomeTax(100000); 
	assert.equal( value, "2053", "Output should be 2053" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 180000", function( assert ) { 
	var value = calculateIncomeTax(180000); 
	assert.equal( value, "4519", "Output should be 4519" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 180001", function( assert ) { 
	var value = calculateIncomeTax(180001); 
	assert.equal( value, "4519", "Output should be 4519" ); 
});

QUnit.test( "calculateIncomeTax when annual salary is 5000000", function( assert ) { 
	var value = calculateIncomeTax(5000000); 
	assert.equal( value, "185269", "Output should be 185269" ); 
}); 

