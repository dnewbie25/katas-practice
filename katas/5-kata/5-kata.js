function howMuchILoveYou(nbPetals) {
  const options = {
    1:"I love you",
    2:"a little",
    3:"a lot",
    4:"passionately",
    5:"madly",
    6:"not at all"
  }
  if(nbPetals>6){
    console.log(`a = ${nbPetals}`)
    return nbPetals%6===0?options[6]:options[nbPetals%6]
  }else{
    return options[nbPetals]
  }
}