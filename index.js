function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var a = 0; a < 4; a++){
    array[a] = musicians[a] + " plays " + instruments[a];
  }
  return array;
}

function johnLennonFacts(facts){
  var b = 0;
  while(b < facts.length){
    facts[b] += "!!!"
    b++
  }
  return facts;
}

function iLoveTheBeatles(number){
  var emptyArray = []
  do {
    emptyArray[number] = "I love the Beatles!"
    number--
  } while (0 < number < 15)
  return emptyArray;
}