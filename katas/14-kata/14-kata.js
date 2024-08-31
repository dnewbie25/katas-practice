function getCount(str) {
  return str.split('').reduce((sum, current)=> 'aeiou'.includes(current)?sum+=1:sum,0);
}