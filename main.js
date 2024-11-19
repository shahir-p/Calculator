function displayContent(content){
    result.value+=content
}
 //clear input field
  function calcClear(){
    result.value= ""
  }

  //output
  function Calcoutput(){
  result.value = eval(result.value)
  }

  //backSpace
  function removeLastDigit(){
    result.value = result.value.slice(0,-1)
  }