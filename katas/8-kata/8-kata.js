function solution(number){
  if(number<0){
    return 0
  }
  let multiples = []
  for(let i=1;i<number;i++){
    if(i%3===0 || i%5===0){
      multiples.push(i)
    }
  }
  return multiples.reduce((sum, current)=>sum+=current,0)
}