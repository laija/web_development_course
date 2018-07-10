function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();


function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        //let j = i; 	// This variable is scope to the block {} inside de for, every time the let runs, it would be a new variable in memory and this way the anonimous function would be making a reference to different spaces in memory becase they belong to different parent scope
        arr.push(
            function(j) {
            	return function() {
            	console.log(j);   
            	}
            }(i)
        )
        
    }
    
    return arr;
}

var fs = buildFunctions2();

fs[0]();
fs[1]();
fs[2]();
