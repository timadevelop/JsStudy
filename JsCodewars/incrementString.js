// Best readable code ever :D
function incrementString (string) {
  var regex = /\d+/g , i, index, numInString, num;
  var matches = string.match(regex);
  console.log(matches);
  if(!matches) return string+1;
  for(i = 0; i < matches.length; i++){
    index = string.indexOf(matches[i]);
    numInString = string.substr(index, matches[i].length);
    num = parseInt(numInString, 10);
    console.log(numInString, num);
    if((''+num).length === numInString.length){
      string = string.substr(0, index) + (++num) + string.substr(index+matches[i].length);
    } else{
      console.log('there', numInString, 'num:', num);
      console.log(numInString.lastIndexOf(''+num));
      num++;
      num = numInString.substring(0, numInString.length-(''+num).length) + num;
      console.log('New num:', num);
      string = string.substr(0, index) + num + string.substr(index+matches[i].length);
    }
    
  }
  return string;
}


console.log(incrementString('0009  f  000  f  099  f  00999'));