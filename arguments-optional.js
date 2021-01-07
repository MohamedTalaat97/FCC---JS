function addTogether(...arg) {
    if(arguments.length ==2){
      if(typeof arguments[0] != "number" || typeof arguments[1] != "number")
      {return undefined }
      return arguments[0]+arguments[1]
    }
  else {
    if(typeof arguments[0] != "number")
    {return undefined}
    const c= (a) =>{
      if(typeof a !="number")
      {return undefined}
      return a+arguments[0]
    } 
return c
  }
}

console.log(addTogether(2)([3]));