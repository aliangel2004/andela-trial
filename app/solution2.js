module.exports={
	findMinMax: function (arry){
		  
  var minNum = array[0];
  var maxNum = array[arry.length -1];
  var minMax = [];
  
  for(var lop = 0; lop<arry.length;lop++ ){
    
    if (arry[lop] < minNum){
      
      minNum = arry[lop];
      
    }else if (arry[lop] > maxNum){
      
      maxNum = arry[lop]; 
      
    }
  }
  
  if(minNum == maxNum){
    
    minMax.push(minNum);
    
  }else{
    
    minMax.push(minNum);
    minMax.push(maxNum);
    
  }
  return minMax;
	}
}



/*(function() {

var findMinMax = function (min,max) {
	var minimum = min;
	var maximum = max;
	if ( var i<maximmum){
		return min;
	else
		return max;
	}
}
module.exports = {
	'findMinMax': findMinMax
}

})();*/