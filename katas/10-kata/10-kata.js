function last(...args) {
  if(args.length===1){
    if(typeof args[0]==='object'){
      return args[0][args[0].length-1]
    }else if(typeof args[0] === 'string'){
      return args[0][args[0].length-1]
    }else{
      return args[0]
    }
  }else{
    return args[args.length-1]
  }
}