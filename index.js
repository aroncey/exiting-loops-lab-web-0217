const breakOut = (array, changeValue, stopValue) => {
  for(var i =0; i<array.length; i++){
      if(array[i]!==stopValue){
        array[i] = changeValue
      }else{
        break
      }
  }
  return array
}

const keepGoing = (array, changeValue, skipValue) =>{
  for(var i =0; i<array.length; i++){
      if(array[i]===skipValue){
        continue
      }else{
        array[i] = changeValue
      }
  }
  return array
}

const findBy = (array, findFn) =>{
  for(var i =0; i<array.length; i++){
      if(findFn(array[i])){
        return array[i]
      }
  }
  return null
}
