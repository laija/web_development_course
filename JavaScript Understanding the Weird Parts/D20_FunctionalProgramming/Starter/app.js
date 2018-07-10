function mapforEach(arr, fn){
	var newArr = [];
	for (var i=0; i < arr.length; i++){
		newArr.push(
			fn(arr[i])
		)
	};
	return newArr;
}

var arr1 = [ 1,2,3];
console.log(arr1);

var arr2 = mapforEach(arr1, function(item){
	return item * 2;
});
console.log(arr2);


var arr3 = mapforEach(arr1, function(item){
	return item > 2;
});
console.log(arr3);

var arr4 = mapforEach(arr1, function(item){
	return item > 1;
});
console.log(arr4);

var checkPastLimit = function(limiter, item){
	return item >= limiter;
};

var MyFunction = function(limiter){
	return function(limiter, item){
		return item > limiter;
	}.bind(this.limiter);
};
//var arr5 = mapforEach(arr1, checkPastLimit.bind(this, 1));
var arr5 = mapforEach(arr1, MyFunction(1));
console.log(arr5)
console.log('-----------------')
var  checkPastLimitSimplified = function(limiter){
	return function(limiter, item){
		return item > limiter;
	}.bind(this, limiter);
};

var arr6 = mapforEach(arr1, checkPastLimitSimplified(2));
console.log(arr6);