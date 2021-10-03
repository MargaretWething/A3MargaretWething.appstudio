function compare(pass1, pass2) {
  pass1 = inptPass1.value
  pass2 = inptPass2.value
  let answer = pass1.localeCompare(pass2)
  return answer
  }
btnPasswordCheck.onclick=function(){
  let pass1 = inptPass1.value
  let pass2 = inptPass2.value
  let answer = compare(pass1,pass2)


if (answer == 0) {
lblMatch.value = ('Success')
}
else {
  lblMatch.value = ('Failure, try again')
  }
  
}